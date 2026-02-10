import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  isSidebarOpen = signal<boolean>(false);
  
  toggleSidebar() {
    this.isSidebarOpen.update(val => !val);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }

  // --- EKSİK OLAN BU KISIM ---
  logout() {
    // Basit bir çıkış simülasyonu
    if(confirm("Çıkış yapmak istiyor musunuz?")) {
      console.log("Çıkış yapıldı");
      // Gerçek projede burada router.navigate(['/login']) olur
    }
  }
}