import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Product {
  iconSvg: string;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor(private sanitizer: DomSanitizer) {}
  products: Product[] = [
    {
      iconSvg: 'chart',
      title: 'Divalto ERP',
      description: 'ERP français N°1 pour PME-ETI. Solution complète intégrant Gestion, CRM, Production, Finance, Paie RH et WMS.',
      features: ['ERP Complet', 'PME/ETI', 'Cloud/On-Premise'],
      link: '/services/divalto'
    },
    {
      iconSvg: 'car',
      title: 'GMAO FIRST PARC',
      description: 'Solution experte de gestion de parc automobile avec 12 modules intégrés : maintenance, carburant, coûts et tableaux de bord.',
      features: ['GMAO', 'Parc Auto', '12 Modules'],
      link: '/gmao-firstparc'
    },
    {
      iconSvg: 'platform',
      title: 'WaveSoft ERP',
      description: 'Solution ERP tunisienne locale parfaitement adaptée aux normes et réglementations tunisiennes avec support en français et arabe.',
      features: ['ERP Tunisien', 'Conformité Locale', 'Support Local'],
      link: '/services/wavesoft'
    },
    {
      iconSvg: 'shield',
      title: 'Sophos Security',
      description: 'Protection cybersécurité nouvelle génération : XG Firewall, Intercept X anti-ransomware et sécurisation du télétravail.',
      features: ['Firewall', 'Anti-Ransomware', 'Cloud'],
      link: '/services/sophos'
    }
  ];

  getIconSvg(iconName: string): SafeHtml {
    const icons: { [key: string]: string } = {
      chart: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 10V3H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      car: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H5L6 5H18L19 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 17V21H9V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 17V21H17V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 9L8 5H16L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      platform: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      shield: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    };
    const svg = icons[iconName] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
