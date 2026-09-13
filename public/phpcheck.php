<?php
// Fichier de diagnostic temporaire, a supprimer une fois le formulaire en place.
header('Content-Type: text/plain; charset=utf-8');
echo 'php_version=' . PHP_VERSION . "\n";
echo 'mail_available=' . (function_exists('mail') ? 'yes' : 'no') . "\n";
echo 'disabled_functions=' . (ini_get('disable_functions') ?: 'none') . "\n";
