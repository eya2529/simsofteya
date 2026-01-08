import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  scrollToSection(event: Event, targetId: string) {
    event.preventDefault();

    if (targetId === '#contact') {
      this.router.navigate(['/contact']);
      this.closeMenu();
      return;
    }

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Validation delay to ensure DOM is ready
        setTimeout(() => {
          this.doScroll(targetId);
        }, 100);
      });
    } else {
      this.doScroll(targetId);
    }
    this.closeMenu();
  }

  private doScroll(targetId: string) {
    const element = document.querySelector(targetId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
