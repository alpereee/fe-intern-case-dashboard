import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Şart

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class CategoriesComponent {
  showModal = false;
  newCategory = { name: '', icon: 'bx-folder', color: 'bg-indigo-500' };

  categories = [
    { name: 'Electronics', count: 120, icon: 'bx-chip', color: 'bg-blue-500' },
    { name: 'Fashion', count: 340, icon: 'bx-closet', color: 'bg-pink-500' },
    { name: 'Home & Garden', count: 85, icon: 'bx-home-heart', color: 'bg-green-500' },
    { name: 'Mobiles', count: 210, icon: 'bx-mobile', color: 'bg-purple-500' },
    { name: 'Computers', count: 145, icon: 'bx-laptop', color: 'bg-indigo-500' },
    { name: 'Accessories', count: 430, icon: 'bx-headphone', color: 'bg-orange-500' },
  ];

  openModal() { this.showModal = true; }
  closeModal() { this.showModal = false; }

  saveCategory() {
    if(this.newCategory.name) {
      this.categories.push({
        name: this.newCategory.name,
        count: 0,
        icon: this.newCategory.icon,
        color: this.newCategory.color
      });
      this.closeModal();
      this.newCategory = { name: '', icon: 'bx-folder', color: 'bg-indigo-500' }; // Reset
    }
  }
}