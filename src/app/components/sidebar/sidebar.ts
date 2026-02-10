import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // EKLENDİ
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule], // EKLENDİ
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  uiService = inject(UiService);

  // route kısımlarının '/dashboard' gibi başladığından emin ol
  menuItems = [
    { title: 'Dashboard', route: '/dashboard', icon: 'bx-home' },
    { title: 'Products', route: '/products', icon: 'bx-box' },
    { title: 'Categories', route: '/categories', icon: 'bx-grid-alt' },
    { title: 'Orders', route: '/orders', icon: 'bx-cart' },
    { title: 'Customers', route: '/customers', icon: 'bx-user' },
    { title: 'Settings', route: '/settings', icon: 'bx-cog' },
  ];

  // Mobilde linke tıklayınca menüyü kapat
  closeMenuOnMobile() {
    if (window.innerWidth < 768) {
      this.uiService.closeSidebar();
    }
  }
}