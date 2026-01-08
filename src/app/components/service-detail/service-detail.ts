import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SERVICES, ServiceData } from '../../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail implements OnInit {
  service = signal<ServiceData | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && SERVICES[id]) {
        this.service.set(SERVICES[id]);
        window.scrollTo(0, 0);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
