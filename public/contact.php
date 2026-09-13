<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const DESTINATAIRE = 'contact@quarto-architecture.be';
const EXPEDITEUR   = 'contact@quarto-architecture.be';

function repondre(int $code, string $message): never
{
    http_response_code($code);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Neutralise les retours a la ligne : sans ca, un attaquant peut injecter
// des en-tetes SMTP supplementaires (Bcc, etc.) via un champ du formulaire.
function nettoyerEnTete(string $valeur): string
{
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', $valeur));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    repondre(405, 'Methode non autorisee.');
}

$donnees = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($donnees)) {
    repondre(400, 'Requete invalide.');
}

$nom     = nettoyerEnTete((string)($donnees['name'] ?? ''));
$email   = nettoyerEnTete((string)($donnees['email'] ?? ''));
$sujet   = nettoyerEnTete((string)($donnees['subject'] ?? ''));
$message = trim((string)($donnees['message'] ?? ''));

if ($nom === '' || $email === '' || $message === '') {
    repondre(400, 'Merci de remplir tous les champs obligatoires.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    repondre(400, 'Adresse e-mail invalide.');
}

if (mb_strlen($nom) > 100 || mb_strlen($sujet) > 150 || mb_strlen($message) > 5000) {
    repondre(400, 'Un des champs depasse la longueur autorisee.');
}

$sujetMail = '[Site] ' . ($sujet !== '' ? $sujet : 'Nouveau message');

$corps = "Nouveau message depuis le site quarto-architecture.be\n\n"
    . "Nom     : {$nom}\n"
    . "E-mail  : {$email}\n"
    . "Sujet   : " . ($sujet !== '' ? $sujet : '(non precise)') . "\n"
    . "Date    : " . date('d/m/Y H:i') . "\n\n"
    . "Message :\n{$message}\n";

// Pas de Reply-To vers l'adresse du visiteur : un « repondre a » pointant
// vers une messagerie grand public differente de l'expediteur est un motif
// d'usurpation classique, et le filtre d'OVH rejetait silencieusement ces
// messages. L'adresse du visiteur figure dans le corps du mail.
$entetes = [
    'From: Site Quarto Architecture <' . EXPEDITEUR . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];

$envoye = mail(
    DESTINATAIRE,
    mb_encode_mimeheader($sujetMail, 'UTF-8'),
    $corps,
    implode("\r\n", $entetes)
);

if (!$envoye) {
    repondre(500, "L'envoi a echoue. Merci d'ecrire directement a " . DESTINATAIRE . '.');
}

repondre(200, 'Message envoye.');
