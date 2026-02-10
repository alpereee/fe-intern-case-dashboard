import { Component, inject, signal } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common'; // ngClass için

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  uiService = inject(UiService);
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  logout() {
    // Gerçek bir uygulamada burada AuthService çağrılır
    const confirmLogout = confirm("Çıkış yapmak istediğinize emin misiniz?");
    if(confirmLogout) {
      alert("Başarıyla çıkış yapıldı! (Login sayfasına yönlendiriliyor...)");
    }
  }
}