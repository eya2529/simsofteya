import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Module {
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-gmao-firstparc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gmao-firstparc.html',
  styleUrl: './gmao-firstparc.css',
})
export class GmaoFirstparc {
  constructor(private sanitizer: DomSanitizer) {}

  modules: Module[] = [
    {
      icon: 'shopping',
      title: 'Achats',
      description: 'Gestion complète des achats de pièces, consommables et services pour votre parc'
    },
    {
      icon: 'tools',
      title: 'Maintenance',
      description: 'Planification et suivi de la maintenance préventive et corrective'
    },
    {
      icon: 'wrench',
      title: 'Interventions',
      description: 'Gestion des interventions techniques et suivi des réparations'
    },
    {
      icon: 'bell',
      title: 'Alertes',
      description: 'Notifications automatiques pour vidanges, visites techniques et échéances'
    },
    {
      icon: 'fuel',
      title: 'Carburant',
      description: 'Suivi de la consommation carburant et analyse des coûts'
    },
    {
      icon: 'tire',
      title: 'Pneumatiques',
      description: 'Gestion du stock et suivi de l\'usure des pneumatiques'
    },
    {
      icon: 'parts',
      title: 'Pièces Détachées',
      description: 'Inventaire et gestion des pièces de rechange'
    },
    {
      icon: 'stock',
      title: 'Stocks',
      description: 'Gestion des stocks de pièces et consommables'
    },
    {
      icon: 'admin',
      title: 'Administration',
      description: 'Gestion administrative complète du parc automobile'
    },
    {
      icon: 'operations',
      title: 'Exploitation',
      description: 'Suivi de l\'utilisation et de la performance du parc'
    },
    {
      icon: 'billing',
      title: 'Facturation',
      description: 'Facturation des prestations et refacturation interne'
    },
    {
      icon: 'dashboard',
      title: 'Tableau de Bord',
      description: 'Indicateurs de performance et aide à la décision'
    }
  ];

  keyFeatures: Feature[] = [
    {
      icon: 'calendar',
      title: 'Maintenance Préventive & Corrective',
      description: 'Planifiez et suivez toutes vos opérations de maintenance pour prolonger la durée de vie de vos véhicules'
    },
    {
      icon: 'notification',
      title: 'Alertes Automatiques',
      description: 'Recevez des notifications pour les vidanges, visites techniques, assurances et toutes les échéances importantes'
    },
    {
      icon: 'analytics',
      title: 'Suivi Carburant & Coûts',
      description: 'Analysez la consommation carburant et maîtrisez le coût de revient kilométrique (TCO) de chaque véhicule'
    },
    {
      icon: 'lifecycle',
      title: 'Suivi du Cycle de Vie',
      description: 'Suivez l\'historique complet de chaque véhicule depuis l\'acquisition jusqu\'à la réforme'
    },
    {
      icon: 'chart',
      title: 'Tableaux de Bord Décisionnels',
      description: 'Visualisez vos KPIs : taux de disponibilité, coûts par km, consommation moyenne, sinistralité'
    },
    {
      icon: 'security',
      title: 'Conformité Réglementaire',
      description: 'Assurez la conformité de votre parc avec les réglementations en vigueur'
    }
  ];

  references = {
    tunisia: [
      'STEG (Société Tunisienne de l\'Électricité et du Gaz)',
      'SONEDE (Société Nationale d\'Exploitation et de Distribution des Eaux)',
      'Municipalités et Collectivités Locales',
      'Entreprises de Transport',
      'Sociétés Industrielles'
    ],
    africa: [
      'Entreprises de Transport Routier',
      'Sociétés de BTP',
      'Compagnies Minières',
      'Organismes Publics'
    ]
  };

  benefits = [
    'Réduction des coûts opérationnels de 15% à 20%',
    'Optimisation de la durée de vie des véhicules',
    'Amélioration du taux de disponibilité du parc',
    'Gain de temps sur les tâches administratives',
    'Meilleure traçabilité des interventions',
    'Conformité réglementaire assurée',
    'Prise de décision basée sur des données fiables'
  ];

  getIconSvg(iconName: string): SafeHtml {
    const icons: { [key: string]: string } = {
      shopping: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2L7 6H3C1.89543 6 1 6.89543 1 8V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V8C23 6.89543 22.1046 6 21 6H17L15 2H9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      tools: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3L9 12L11 14L16.7 8.3C17.09 7.91 17.09 7.28 16.7 6.89L15.11 5.3C14.72 4.91 14.09 4.91 13.7 5.3L14.7 6.3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 8L18 6L16 8M8 16L6 18L8 20M18 16L20 18L18 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      wrench: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3C15.4 7 16 8 16 9C16 10.6569 14.6569 12 13 12C12 12 11 11.4 10.3 10.7L3 18V21H6L13.3 13.7C14 14.4 15 15 16 15C17.6569 15 19 13.6569 19 12C19 11 18.4 10 17.7 9.3L15.5 11.5L12.5 8.5L14.7 6.3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      bell: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      fuel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 22L4 3H16L17 22H3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 8H14M6 12H14M6 16H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 10H19C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18C19.7348 18 19.4804 17.8946 19.2929 17.7071C19.1054 17.5196 19 17.2652 19 17V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      tire: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      parts: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      stock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      admin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      operations: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      billing: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      dashboard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      calendar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      notification: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      analytics: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 9L13 14L9 10L3 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      lifecycle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" stroke="currentColor" stroke-width="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      chart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      security: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    };
    const svg = icons[iconName] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
