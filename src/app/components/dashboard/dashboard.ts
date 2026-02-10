import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  // Örnek veriler
  stats = [
    { title: 'Total Sales', value: '$124,592', change: '+12%', icon: 'bx-dollar-circle', color: 'bg-green-100 text-green-600' },
    { title: 'Total Orders', value: '4,285', change: '+8%', icon: 'bx-shopping-bag', color: 'bg-blue-100 text-blue-600' },
    { title: 'New Customers', value: '854', change: '+24%', icon: 'bx-user-plus', color: 'bg-purple-100 text-purple-600' },
    { title: 'Pending Issues', value: '12', change: '-2%', icon: 'bx-error-circle', color: 'bg-red-100 text-red-600' }
  ];

  recentActivities = [
    { text: 'New order #9584 from Sarah K.', time: '5 min ago', icon: 'bx-cart', color: 'text-blue-500' },
    { text: 'Server maintenance completed', time: '2 hours ago', icon: 'bx-server', color: 'text-green-500' },
    { text: 'New product added: Smart Watch', time: '4 hours ago', icon: 'bx-plus-circle', color: 'text-purple-500' },
    { text: 'Refund request #9402', time: '1 day ago', icon: 'bx-undo', color: 'text-red-500' },
  ];
}