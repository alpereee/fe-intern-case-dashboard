import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent {
  
  // Sipariş Verileri
  orders = [
    { id: '#ORD-8521', customer: 'Michael Jordan', date: 'Oct 24, 2023', total: '$1,200', status: 'Shipped', items: 3 },
    { id: '#ORD-8522', customer: 'Sarah Connor', date: 'Oct 24, 2023', total: '$450', status: 'Pending', items: 1 },
    { id: '#ORD-8523', customer: 'John Wick', date: 'Oct 23, 2023', total: '$3,400', status: 'Processing', items: 5 },
    { id: '#ORD-8524', customer: 'Bruce Wayne', date: 'Oct 22, 2023', total: '$125', status: 'Delivered', items: 2 },
    { id: '#ORD-8525', customer: 'Clark Kent', date: 'Oct 21, 2023', total: '$60', status: 'Cancelled', items: 1 },
    { id: '#ORD-8526', customer: 'Tony Stark', date: 'Oct 20, 2023', total: '$5,240', status: 'Shipped', items: 8 },
  ];

  // Statüye göre renk sınıfı döndüren fonksiyon
  getStatusClass(status: string) {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-700 border border-green-200';
      case 'Shipped': return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'Processing': return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      case 'Pending': return 'bg-orange-100 text-orange-700 border border-orange-200';
      case 'Cancelled': return 'bg-red-100 text-red-700 border border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  // --- BUTON AKSİYONLARI ---

  // Export Butonu: Dosya indirme simülasyonu
  exportOrders() {
    // Gerçek projede burada Excel/PDF servisi çağrılır
    const confirmExport = confirm("Sipariş listesini Excel olarak indirmek istiyor musunuz? 📥");
    if (confirmExport) {
      alert("Dosya indiriliyor: orders_2023.xlsx");
    }
  }

  // Create Order Butonu: Yeni sipariş ekranı
  createOrder() {
    alert("Yeni Sipariş Oluşturma ekranı açılıyor... 🚀");
    // İleride buraya: this.router.navigate(['/orders/create']); eklenebilir
  }

  // Düzenleme (Kalem ikonu) aksiyonu
  editOrder(id: string) {
    alert(id + " numaralı sipariş detayları açılıyor...");
  }
}