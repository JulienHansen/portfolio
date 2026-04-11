import tramvitalis1 from '../assets/TramVitalis/1.png'
import tramvitalis2 from '../assets/TramVitalis/2.png'
import tramvitalis3 from '../assets/TramVitalis/3.png'
import tramvitalis4 from '../assets/TramVitalis/4.png'
import tramvitalis5 from '../assets/TramVitalis/5.png'

import shiva1 from '../assets/Shiva/1bis.jpg'
import shiva2 from '../assets/Shiva/2.jpeg'
import shiva3 from '../assets/Shiva/3.jpg'
import shiva4 from '../assets/Shiva/4.jpeg'
import shiva5 from '../assets/Shiva/5bis.jpg'
import shiva7 from '../assets/Shiva/7.jpg'

import strataverde1 from '../assets/strataverde/1.jpeg'
import strataverde2 from '../assets/strataverde/2.png'
import strataverde3 from '../assets/strataverde/3.png'
import strataverde4 from '../assets/strataverde/4.png'

export const projects = [
  {
    id: 1,
    slug: "tramvitalis",
    title: "TramVitalis",
    location: "Boncelles, Belgique",
    year: "2024",
    category: "Étude",
    phase: "Étude",
    collaboration: "Collignon Théo, Eliard Marine, Jennen Thomas",
    surface: "38 955 m²",
    duration: "",
    image: tramvitalis1,
    images: [
      tramvitalis1,
      tramvitalis2,
      tramvitalis3,
      tramvitalis4,
      tramvitalis5
    ],
    description: "Tram Vitalis est un projet d'aménagement durable à Boncelles qui associe habitat et nature dans un cadre verdoyant. Il propose 61 logements intégrés autour du RAVeL, avec des espaces publics et partagés favorisant les échanges. L'ensemble vise à offrir un cadre de vie moderne, convivial et apaisé.",
    challenge: "Le projet devait densifier le site sans altérer son caractère rural ni l'attachement des habitants. Il fallait aussi répondre aux problèmes de sécurité liés au trafic et au manque d'infrastructures. Les contraintes du terrain, entre pente et gestion des eaux, s'ajoutaient à la nécessité de préserver la biodiversité existante.",
    solution: "La réponse repose sur une densification maîtrisée laissant une large place aux espaces naturels et partagés. Le projet intègre potagers, verger et lieux de rencontre tout en améliorant la mobilité douce et la sécurité. Des choix durables assurent une gestion responsable de l'eau, des matériaux et de l'environnement."
  },
  {
    id: 2,
    slug: "strataverde",
    title: "StrataVerde",
    location: "Chênée, Belgique",
    year: "2025",
    category: "Étude",
    phase: "Étude",
    collaboration: "Eliard Marine - Goffinet Olivier",
    surface: "50 000 m²",
    duration: "4 mois",
    image: strataverde1,
    images: [
      strataverde1,
      strataverde2,
      strataverde3,
      strataverde4
    ],
    description: "Suite aux inondations de 2021, le projet requalifie Chênée en replaçant l'Ourthe au centre et en créant un corridor écologique structurant.",
    challenge: "Transformer un quartier marqué par les inondations et dominé par la voiture en un espace résilient et attractif. Il fallait reconnecter Chênée à l'Ourthe tout en renforçant sa dynamique sociale et urbaine.",
    solution: "Le projet intègre un hall sportif, un restaurant-coworking avec logements et des kots étudiants pour créer une centralité active. Une promenade paysagère structure le site et favorise la continuité écologique. Strata Verde façonne ainsi un quartier plus vert, fluide et vivant."
  },
  {
    id: 3,
    slug: "villa-horizon",
    title: "Villa Horizon",
    location: "Knokke, Belgique",
    year: "2023",
    category: "Résidentiel",
    phase: "Réalisé",
    collaboration: "Marine Lefebvre",
    surface: "450 m²",
    duration: "24 mois",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
    ],
    description: "Villa de luxe face à la mer avec une architecture horizontale qui s'intègre harmonieusement dans le paysage côtier. Chaque espace offre une vue panoramique sur l'horizon.",
    challenge: "Créer une résidence de prestige qui dialogue avec son environnement maritime tout en offrant une protection contre les vents côtiers et l'exposition saline.",
    solution: "L'architecture basse et étendue épouse le terrain naturel, avec des terrasses protégées et des matériaux résistants au climat marin. De grandes baies vitrées cadrent les vues tout en assurant l'isolation."
  },
  {
    id: 4,
    slug: "Shiva",
    title: "Shiva",
    location: "Seraing, Belgique",
    year: "2024",
    category: "Étude",
    phase: "Étude",
    collaboration: "Eliard Marine - Goffinet Olivier",
    surface: "11 627 m²",
    duration: "10 mois",
    image: shiva1,
    images: [
      shiva1,
      shiva2,
      shiva3,
      shiva4,
      shiva5,
      shiva7
    ],
    blendImages: [2, 5],
    description: "Projet de réhabilitation d'une ancienne halle aux locomotives transformant un ancien site industriel en pôle culturel et social. Le projet relie patrimoine et modernité en intégrant un cinéma, des studios, un restaurant et des espaces publics autour d'un parcours de mobilité douce.",
    challenge: "Comment préserver l'identité industrielle du site tout en lui donnant une nouvelle vie active et attractive pour le quartier.",
    solution: "Le projet conserve les façades industrielles comme mémoire du lieu tout en restructurant l'intérieur pour accueillir de nouveaux programmes culturels et sociaux. L'organisation autour d'un restaurant central, d'un cinéma, de studios et d'espaces extérieurs animés crée un lieu ouvert, dynamique et connecté au quartier."
  },
  {
    id: 5,
    slug: "appartement-terrasse",
    title: "Appartement Terrasse",
    location: "Bruxelles, Belgique",
    year: "2023",
    category: "Résidentiel",
    phase: "Étude",
    collaboration: "Sophie Martin",
    surface: "180 m²",
    duration: "8 mois",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
    ],
    description: "Rénovation complète d'un penthouse avec création d'une terrasse panoramique. L'espace intérieur s'ouvre généreusement sur l'extérieur pour une vie dedans-dehors.",
    challenge: "Transformer un appartement cloisonné en un espace ouvert et lumineux, tout en créant une connexion forte avec la terrasse existante sous-exploitée.",
    solution: "Suppression des cloisons non porteuses, création de grandes ouvertures coulissantes et aménagement de la terrasse comme une véritable pièce à vivre extérieure avec cuisine d'été."
  },
  {
    id: 6,
    slug: "maison-jardin",
    title: "Maison Jardin",
    location: "Liège, Belgique",
    year: "2022",
    category: "Résidentiel",
    phase: "Réalisé",
    collaboration: "Antoine Renard",
    surface: "320 m²",
    duration: "20 mois",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
    ],
    description: "Une maison bioclimatique où l'architecture et le paysage ne font qu'un. Le jardin pénètre dans la maison à travers des patios intérieurs végétalisés.",
    challenge: "Concevoir une habitation durable qui minimise son impact environnemental tout en maximisant le confort des occupants à travers les saisons.",
    solution: "Orientation optimisée, matériaux biosourcés, patios végétalisés pour la régulation thermique naturelle et systèmes passifs de chauffage et rafraîchissement."
  }
]
