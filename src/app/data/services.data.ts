export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  heroImage?: string; // Optional, can use gradients if not present
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const SERVICES: { [key: string]: ServiceData } = {
  'firstparc': {
    id: 'firstparc',
    title: 'GMAO FirstParc',
    subtitle: 'La solution experte pour la gestion de votre parc automobile',
    description: `
      FirstParc est une solution GMAO (Gestion de Maintenance Assistée par Ordinateur) conçue spécifiquement pour les gestionnaires de flotte. 
      Elle permet d'assurer de façon concrète et précise l'ensemble des tâches liées à la gestion technique, administrative et financière de votre parc automobile.
      Que vous gériez une flotte de 10 ou 1000 véhicules, FirstParc centralise toutes vos données pour simplifier vos prises de décision.
    `,
    features: [
      {
        title: 'Suivi de Maintenance',
        description: 'Planifiez et suivez les entretiens préventifs et curatifs. Recevez des alertes automatiques pour les vidanges, visites techniques et assurances.'
      },
      {
        title: 'Gestion des Coûts',
        description: 'Analysez le coût de revient kilométrique (TCO) par véhicule. Suivez la consommation carburant, les dépenses de réparation et les frais administratifs.'
      },
      {
        title: 'Gestion Administrative',
        description: 'Centralisez les documents (cartes grises, assurances, vignettes). Gérez les conducteurs et les affectations de véhicules.'
      },
      {
        title: 'Tableaux de Bord',
        description: 'Des KPIs clairs pour piloter votre activité : taux de disponibilité, coûts par km, consommation moyenne, sinistralité.'
      }
    ],
    benefits: [
      'Réduction des coûts opérationnels de 15% à 20%',
      'Optimisation de la durée de vie des véhicules',
      'Conformité réglementaire assurée',
      'Gain de temps sur les tâches administratives'
    ]
  },
  'assistance': {
    id: 'assistance',
    title: 'Assistance Technique',
    subtitle: 'Un support réactif et expert pour votre infrastructure',
    description: `
      Notre département d'assistance technique est composé d'ingénieurs certifiés prêts à intervenir pour garantir la continuité de votre activité.
      Nous ne nous contentons pas de résoudre les pannes ; nous vous accompagnons dans l'évolution et la sécurisation de votre système d'information.
    `,
    features: [
      {
        title: 'Support Helpdesk',
        description: 'Une prise en charge rapide de vos incidents par téléphone ou télémaintenance pour minimiser les interruptions de service.'
      },
      {
        title: 'Intervention sur Site',
        description: 'Déplacement de nos techniciens pour les installations physiques, pannes matérielles ou configurations complexes.'
      },
      {
        title: 'Maintenance Préventive',
        description: 'Visites régulières et monitoring pour anticiper les défaillances et maintenir vos systèmes à jour.'
      },
      {
        title: 'Audit & Conseil',
        description: 'Analyse de votre parc informatique et recommandations pour optimiser vos performances et votre sécurité.'
      }
    ],
    benefits: [
      'Garantie de temps d\'intervention (GTI)',
      'Interlocuteur technique unique et dédié',
      'Traçabilité complète des tickets d\'incidents',
      'Sérénité pour vous concentrer sur votre métier'
    ]
  },
  'dev': {
    id: 'dev',
    title: 'Développement Spécifique',
    subtitle: 'Des logiciels sur mesure qui s\'adaptent à votre métier',
    description: `
      Quand les logiciels du marché ne suffisent plus, Simsoft Technologies développe des solutions sur mesure adaptées à vos processus métier uniques.
      Notre équipe maîtrise les technologies web et mobiles modernes pour créer des applications performantes, évolutives et sécurisées.
    `,
    features: [
      {
        title: 'Applications Web & Mobile',
        description: 'Développement d\'applications métier accessibles via navigateur ou smartphones (Android/iOS).'
      },
      {
        title: 'Intégration Système',
        description: 'Création de passerelles entre vos différents logiciels (ERP, CRM, Site Web) pour fluidifier la circulation de l\'information.'
      },
      {
        title: 'Modernisation d\'Applications',
        description: 'Refonte de vos anciens logiciels (Legacy) vers des technologies actuelles pour gagner en performance et maintenabilité.'
      },
      {
        title: 'Méthodologie Agile',
        description: 'Développement itératif avec des livraisons régulières pour s\'assurer que le produit final correspond exactement à vos attentes.'
      }
    ],
    benefits: [
      'Solution 100% adaptée à vos besoins',
      'Propriété intellectuelle du code source',
      'Pas de coûts de licence récurrents',
      'Avantage concurrentiel grâce à des outils uniques'
    ]
  },
  'sophos': {
    id: 'sophos',
    title: 'Sécurité Sophos',
    subtitle: 'La cybersécurité nouvelle génération simplifiée',
    description: `
      En tant que partenaire Sophos, nous déployons les meilleures solutions de sécurité pour protéger votre entreprise contre les ransomwares, malwares et intrusions.
      Sophos XG Firewall et Intercept X offrent une protection synchronisée unique sur le marché.
    `,
    features: [
      {
        title: 'Protection Synchronisée',
        description: 'Votre pare-feu et vos endpoints communiquent entre eux pour isoler automatiquement les machines infectées.'
      },
      {
        title: 'Anti-Ransomware',
        description: 'La technologie Intercept X bloque le chiffrement malveillant de vos fichiers et permet de revenir à un état sain.'
      },
      {
        title: 'Contrôle du Web & des Applications',
        description: 'Gérez l\'accès de vos utilisateurs aux sites web et applications pour sécuriser et optimiser la bande passante.'
      },
      {
        title: 'Sécurisation du Télétravail',
        description: 'Solutions VPN et accès distant sécurisé (ZTNA) pour permettre à vos collaborateurs de travailler sereinement de partout.'
      }
    ],
    benefits: [
      'Protection leader du marché (Gartner)',
      'Visibilité totale sur votre réseau',
      'Administration centralisée dans le Cloud',
      'Mises à jour automatiques contre les nouvelles menaces'
    ]
  },
  'divalto': {
    id: 'divalto',
    title: 'Solution Divalto ERP',
    subtitle: 'ERP N°1 pour PME-ETI : Puissant, Flexible et Évolutif',
    description: `
      Partenaire intégrateur de référence, Simsoft Technologies déploie l'ERP Divalto pour transformer la gestion des PME et ETI.
      Divalto est un éditeur français reconnu pour sa robustesse et sa capacité à s'adapter aux spécificités de chaque métier.
      Notre mission est de vous fournir une solution qui centralise vos données, optimise vos processus et vous offre une vision 360° de votre activité.

      L'ERP Divalto couvre tous les domaines de gestion : Gestion Commerciale, CRM, Production, Comptabilité, Finance, Paie RH,
      Gestion de Projets, WMS, et bien plus encore. Chaque module est conçu pour s'intégrer parfaitement aux autres.
    `,
    features: [
      {
        title: 'Gestion Commerciale Complète',
        description: 'Devis, commandes, facturation, gestion des stocks, achats et ventes avec workflow automatisé.'
      },
      {
        title: 'CRM Intégré',
        description: 'Suivi client 360°, pipeline commercial, campagnes marketing et gestion des opportunités.'
      },
      {
        title: 'Production & MES',
        description: 'Planification, ordonnancement, suivi atelier, gestion des OF et traçabilité complète.'
      },
      {
        title: 'Finance & Comptabilité',
        description: 'Comptabilité générale, analytique, trésorerie, contrôle de gestion et consolidation.'
      },
      {
        title: 'Paie & RH',
        description: 'Gestion complète du personnel, paie, formation, recrutement et entretiens.'
      },
      {
        title: 'WMS & Logistique',
        description: 'Gestion d\'entrepôt avancée, préparation de commandes, expéditions et traçabilité.'
      },
      {
        title: 'Business Intelligence',
        description: 'Tableaux de bord personnalisés, reporting avancé et aide à la décision.'
      },
      {
        title: 'Connectivité',
        description: 'APIs ouvertes, EDI, e-commerce et intégration avec votre écosystème logiciel.'
      }
    ],
    benefits: [
      'Solution complète et modulaire adaptée à votre croissance',
      'Interface moderne accessible Web et Mobile',
      'Gain de productivité de 20% à 30%',
      'ROI rapide grâce à l\'automatisation',
      'Support et formation par nos experts certifiés',
      'Hébergement Cloud ou On-Premise selon vos besoins'
    ]
  },
  'wavesoft': {
    id: 'wavesoft',
    title: 'WaveSoft ERP',
    subtitle: 'Solution ERP Tunisienne Complète et Locale',
    description: `
      WaveSoft est une solution ERP tunisienne développée localement pour répondre aux besoins spécifiques
      des entreprises tunisiennes. Cette plateforme intègre toutes les fonctionnalités d'une entreprise moderne
      au sein d'une seule plateforme et d'une seule base de données.

      Avec WaveSoft, bénéficiez d'un ERP parfaitement adapté aux réglementations tunisiennes,
      avec un support local en français et en arabe.
    `,
    features: [
      {
        title: 'Gestion Commerciale',
        description: 'Gestion complète des ventes, achats, stocks et facturations conforme à la législation tunisienne.'
      },
      {
        title: 'Comptabilité Locale',
        description: 'Comptabilité adaptée aux normes comptables tunisiennes avec déclarations fiscales intégrées.'
      },
      {
        title: 'Gestion des Stocks',
        description: 'Suivi en temps réel des stocks, inventaires, mouvements et valorisation.'
      },
      {
        title: 'CRM & Ventes',
        description: 'Gestion de la relation client, suivi des opportunités et pipeline de vente.'
      },
      {
        title: 'Production',
        description: 'Planification de production, nomenclatures, ordres de fabrication et suivi atelier.'
      },
      {
        title: 'Paie & RH',
        description: 'Gestion du personnel, calcul de paie conforme à la législation sociale tunisienne.'
      }
    ],
    benefits: [
      'Solution 100% conforme aux normes tunisiennes',
      'Support local en français et arabe',
      'Prix compétitifs adaptés au marché tunisien',
      'Formation et accompagnement sur mesure',
      'Mises à jour régulières selon les évolutions réglementaires',
      'Base de données unique pour une vision consolidée'
    ]
  }
};
