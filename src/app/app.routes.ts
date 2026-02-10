import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ProductListComponent } from './components/product-list/product-list';
import { CategoriesComponent } from './components/categories/categories';
import { OrdersComponent } from './components/orders/orders';
import { CustomersComponent } from './components/customers/customers'; // YENİ EKLENDİ
import { SettingsComponent } from './components/settings/settings';   // YENİ EKLENDİ

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customers', component: CustomersComponent }, // YENİ ROTA
  { path: 'settings', component: SettingsComponent },   // YENİ ROTA
  { path: '**', redirectTo: 'dashboard' }
];