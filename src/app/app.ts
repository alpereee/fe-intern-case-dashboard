import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // 1. Bu satır olmalı
import { SidebarComponent } from './components/sidebar/sidebar';
import { HeaderComponent } from './components/header/header';
// ProductList'i buradan SİL (artık router yönetiyor)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent], // 2. Buraya ekli olmalı
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}