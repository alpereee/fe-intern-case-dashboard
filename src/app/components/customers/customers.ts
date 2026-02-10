import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.html',
  // css satırı yok
})
export class CustomersComponent {
  showModal = false;
  newCustomer = { name: '', email: '', phone: '' };

  customers = [
    { name: 'Michael Jordan', email: 'michael@example.com', phone: '+1 555 0123', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=1' },
    // ... eski veriler
  ];

  openModal() { this.showModal = true; }
  closeModal() { this.showModal = false; }

  saveCustomer() {
    if(this.newCustomer.name) {
      this.customers.unshift({
        name: this.newCustomer.name,
        email: this.newCustomer.email,
        phone: this.newCustomer.phone,
        status: 'Active',
        avatar: `https://i.pravatar.cc/150?u=${Math.random()}`
      });
      this.closeModal();
      this.newCustomer = { name: '', email: '', phone: '' };
      alert('Müşteri Eklendi!');
    }
  }
}