import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent {
  // Varsayılan aktif sekme
  activeTab: string = 'personal';

  // Form verileri
  profile = {
    firstName: 'Patricia',
    lastName: 'Peter',
    email: 'patricia.peter@example.com',
    bio: 'Experienced Super Admin managing POS systems.'
  };

  passwordData = {
    current: '',
    new: '',
    confirm: ''
  };

  notifications = {
    email: true,
    push: false,
    sms: true
  };

  // Sekme değiştirme fonksiyonu
  switchTab(tab: string) {
    this.activeTab = tab;
  }

  saveChanges() {
    // Burada backend'e istek atılıyormuş gibi yapıyoruz
    const btn = document.getElementById('saveBtn');
    if(btn) {
      btn.innerHTML = '<i class="bx bx-loader-alt animate-spin"></i> Saving...';
      setTimeout(() => {
        btn.innerHTML = 'Save Changes';
        alert('Changes saved successfully! ✅');
      }, 1500);
    }
  }
}