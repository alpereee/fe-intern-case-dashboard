import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Arama ve Modal formları için şart

// Ürün Veri Tipi Tanımı
interface Product {
  id: number;
  name: string;
  category: string;
  transactionId: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Canceled';
  image: string; // Boxicons ikon sınıfı
  selected: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Modülleri içeri aldık
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  
  // --- DURUM DEĞİŞKENLERİ ---
  searchText: string = '';       // Arama kutusu değeri
  selectAll: boolean = false;    // "Hepsini Seç" kutusu durumu
  currentPage: number = 1;       // Aktif sayfa numarası
  itemsPerPage: number = 8;      // Sayfa başına gösterilecek ürün sayısı
  showAddModal: boolean = false; // Modal açık mı kapalı mı?

  // Yeni eklenecek ürün için geçici model
  newProduct = {
    name: '',
    category: '',
    price: null as number | null
  };

  // --- MOCK DATA (Örnek Veriler) ---
  // Sayfalama çalışsın diye veriyi biraz bol tuttum
  allProducts: Product[] = [
    { id: 1, name: 'Mouse Blue Pro', category: 'Accessories', transactionId: 'TR-001', date: 'Dec 22, 2023', amount: 145, status: 'Completed', image: 'bx-mouse', selected: false },
    { id: 2, name: 'Smartphone Pro', category: 'Mobile Phone', transactionId: 'TR-002', date: 'Dec 21, 2023', amount: 942, status: 'Completed', image: 'bx-mobile', selected: false },
    { id: 3, name: 'Bluetooth Keyboard', category: 'Accessories', transactionId: 'TR-003', date: 'Dec 21, 2023', amount: 156, status: 'Completed', image: 'bx-keyboard', selected: false },
    { id: 4, name: 'Retro Radio', category: 'Audio', transactionId: 'TR-004', date: 'Dec 20, 2023', amount: 942, status: 'Completed', image: 'bx-radio', selected: false },
    { id: 5, name: 'Laptop Pro', category: 'Computer', transactionId: 'TR-006', date: 'Dec 18, 2023', amount: 1242, status: 'Canceled', image: 'bx-laptop', selected: false },
    { id: 6, name: 'Clear LED Monitor', category: 'Computer', transactionId: 'TR-008', date: 'Dec 17, 2023', amount: 799, status: 'Pending', image: 'bx-tv', selected: false },
    { id: 7, name: 'Digital Camera', category: 'Electronics', transactionId: 'TR-009', date: 'Dec 15, 2023', amount: 550, status: 'Completed', image: 'bx-camera', selected: false },
    { id: 8, name: 'Gaming Headset', category: 'Audio', transactionId: 'TR-010', date: 'Dec 14, 2023', amount: 120, status: 'Pending', image: 'bx-headphone', selected: false },
    { id: 9, name: 'Smart Watch 8', category: 'Wearables', transactionId: 'TR-011', date: 'Dec 12, 2023', amount: 299, status: 'Completed', image: 'bx-watch', selected: false },
    { id: 10, name: 'USB-C Hub', category: 'Accessories', transactionId: 'TR-012', date: 'Dec 10, 2023', amount: 45, status: 'Completed', image: 'bx-usb', selected: false },
    { id: 11, name: 'Wireless Charger', category: 'Mobile Phone', transactionId: 'TR-013', date: 'Dec 09, 2023', amount: 30, status: 'Canceled', image: 'bx-plug', selected: false },
    { id: 12, name: 'Gaming Mouse', category: 'Accessories', transactionId: 'TR-014', date: 'Dec 08, 2023', amount: 89, status: 'Completed', image: 'bx-mouse-alt', selected: false },
  ];

  // --- GETTERS (Otomatik Hesaplanan Değerler) ---

  // 1. Arama Filtresi
  get filteredProducts() {
    // Arama boşsa hepsini döndür, doluysa isme veya ID'ye göre filtrele
    if (!this.searchText) return this.allProducts;
    
    return this.allProducts.filter(p => 
      p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.transactionId.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 2. Sayfalama Mantığı
  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    // Filtrelenmiş listeden o sayfanın elemanlarını al
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // 3. Toplam Sayfa Sayısı
  get totalPages() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  // --- FONKSİYONLAR ---

  // Sayfa Değiştirme
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.selectAll = false; // Sayfa değişince seçimi sıfırla
    }
  }

  // Hepsini Seç / Kaldır
  toggleSelectAll() {
    // Sadece ekranda görünenleri seçer
    this.paginatedProducts.forEach(p => p.selected = this.selectAll);
  }

  // Tekli Seçim Kontrolü
  checkIfAllSelected() {
    // Eğer ekrandaki herkes seçiliyse üstteki kutuyu da seçili yap
    this.selectAll = this.paginatedProducts.every(p => p.selected);
  }

  // Statüye Göre Renk Sınıfı Döndür
  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border border-green-200';
      case 'Canceled': return 'bg-red-100 text-red-700 border border-red-200';
      case 'Pending': return 'bg-orange-100 text-orange-700 border border-orange-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  // Ürün Silme (Action Menüsü İçin)
  deleteProduct(product: Product) {
    const confirmDelete = confirm(`${product.name} ürününü silmek istediğinize emin misiniz?`);
    if (confirmDelete) {
      // Ürünü listeden çıkar
      this.allProducts = this.allProducts.filter(p => p.id !== product.id);
      
      // Eğer sayfa boşaldıysa ve 1. sayfada değilsek bir geri gel
      if (this.paginatedProducts.length === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      alert('Ürün silindi!');
    }
  }

  // --- MODAL İŞLEMLERİ (YENİ ÜRÜN) ---

  openModal() {
    this.showAddModal = true;
  }

  closeModal() {
    this.showAddModal = false;
    // Formu temizle
    this.newProduct = { name: '', category: '', price: null };
  }

  saveProduct() {
    // Validasyon (Doğrulama)
    if (this.newProduct.name && this.newProduct.price && this.newProduct.price > 0) {
      
      // Yeni ürün objesi oluştur
      const newItem: Product = {
        id: Date.now(), // Benzersiz ID için zaman damgası
        name: this.newProduct.name,
        category: this.newProduct.category || 'General',
        transactionId: 'TR-' + Math.floor(1000 + Math.random() * 9000), // Rastgele TR kodu
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        amount: this.newProduct.price,
        status: 'Pending', // Varsayılan statü
        image: 'bx-package', // Varsayılan ikon
        selected: false
      };

      // Listeye en başa ekle (unshift)
      this.allProducts.unshift(newItem);
      
      // Modalı kapat ve başarı mesajı ver
      this.closeModal();
      alert('Ürün başarıyla eklendi! 🎉');
      
      // İlk sayfaya git ki yeni ürünü görelim
      this.currentPage = 1;

    } else {
      alert('Lütfen geçerli bir ürün adı ve fiyatı giriniz.');
    }
  }
}