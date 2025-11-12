import { Injectable } from '@angular/core';

export interface ProductSize {
  size: number;
  stock: number; 
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  sizes: ProductSize[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private products: Product[] = [
    // === NIKE PRODUCTS ===
    {
      id: 1,
      name: 'Jordan4 White',
      brand: 'Nike',
      price: 249,
      image: 'assets/Jordan1.jpg',
      description: 'მაღალი ხარისხის სპორტული ფეხსაცმელი, შექმნილი კომფორტისა და სისწრაფისთვის.',
      sizes: [
        { size: 38, stock: 5 },
        { size: 39, stock: 8 },
        { size: 40, stock: 1 },
        { size: 41, stock: 3 },
        { size: 42, stock: 10 },
        { size: 43, stock: 6 },
        { size: 44, stock: 2 }
      ]
    },
    {
      id: 2,
      name: 'Jordan4 Red',
      brand: 'Nike',
      price: 179,
      image: 'assets/Jordan2.jpg',
      description: 'ყოველდღიური სტილი და ელეგანტურობა — შექმნილი ქალაქური ცხოვრებისთვის.',
      sizes: [
        { size: 38, stock: 7 },
        { size: 39, stock: 5 },
        { size: 40, stock: 4 },
        { size: 41, stock: 0 },
        { size: 42, stock: 9 },
        { size: 43, stock: 3 },
        { size: 44, stock: 1 }
      ]
    },
    {
      id: 3,
      name: 'Jordan4 Black',
      brand: 'Nike',
      price: 299,
      image: 'assets/Jordan3.jpg',
      description: 'ძლიერი outsole დიზაინი და წყალგამძლე ზედაპირი ბუნებისმოყვარულთათვის.',
      sizes: [
        { size: 38, stock: 2 },
        { size: 39, stock: 3 },
        { size: 40, stock: 5 },
        { size: 41, stock: 7 },
        { size: 42, stock: 0 },
        { size: 43, stock: 4 },
        { size: 44, stock: 2 }
      ]
    },
    {
      id: 4,
      name: 'Jordan4 Light Blue',
      brand: 'Nike',
      price: 129,
      image: 'assets/Jordan4.jpg',
      description: 'მსუბუქი, ჰაეროვანი და მოდური — იდეალური ზაფხულის ფეხსაცმელი.',
      sizes: [
        { size: 38, stock: 0 },
        { size: 39, stock: 5 },
        { size: 40, stock: 4 },
        { size: 41, stock: 6 },
        { size: 42, stock: 8 },
        { size: 43, stock: 3 },
        { size: 44, stock: 1 }
      ]
    },

    // === ADIDAS ===
    {
      id: 5,
      name: 'Super Star Black',
      brand: 'Adidas',
      price: 269,
      image: 'assets/superstar1.jpg',
      description: 'კლასიკური სტილი და თანამედროვე კომფორტი ყოველდღიური ტარებისთვის.',
      sizes: [
        { size: 38, stock: 3 },
        { size: 39, stock: 5 },
        { size: 40, stock: 7 },
        { size: 41, stock: 2 },
        { size: 42, stock: 5 },
        { size: 43, stock: 3 },
        { size: 44, stock: 0 }
      ]
    },
    {
      id: 6,
      name: 'Super Star White',
      brand: 'Adidas',
      price: 310,
      image: 'assets/superstar2.jpg',
      description: 'ინოვაციური ბუსტ ტექნოლოგიით შექმნილი სუპერკომფორტული ფეხსაცმელი.',
      sizes: [
        { size: 38, stock: 6 },
        { size: 39, stock: 9 },
        { size: 40, stock: 4 },
        { size: 41, stock: 5 },
        { size: 42, stock: 7 },
        { size: 43, stock: 2 },
        { size: 44, stock: 1 }
      ]
    },
    {
      id: 7,
      name: 'MenS SUPERSTAR II Sneakers',
      brand: 'Adidas',
      price: 199,
      image: 'assets/superstar3.png',
      description: 'კულტურული დიზაინი და მაქსიმალური მოხერხებულობა.',
      sizes: [
        { size: 38, stock: 5 },
        { size: 39, stock: 3 },
        { size: 40, stock: 8 },
        { size: 41, stock: 6 },
        { size: 42, stock: 0 },
        { size: 43, stock: 2 },
        { size: 44, stock: 4 }
      ]
    },

    // === GOLDEN GOOSE ===
    {
      id: 8,
      name: 'Golden Goose FW25',
      brand: 'GoldenGoose',
      price: 149,
      image: 'assets/Goldengoose1.png',
      description: 'მოდური და უნივერსალური დიზაინი ნებისმიერი სტილისთვის.',
      sizes: [
        { size: 38, stock: 8 },
        { size: 39, stock: 6 },
        { size: 40, stock: 5 },
        { size: 41, stock: 4 },
        { size: 42, stock: 2 },
        { size: 43, stock: 0 },
        { size: 44, stock: 3 }
      ]
    },
    {
      id: 9,
      name: 'Golden Goose GGDB',
      brand: 'GoldenGoose',
      price: 220,
      image: 'assets/Goldengoose2.png',
      description: 'სტაბილურობა და კლასიკური დიზაინი ყოველდღიური ტარებისთვის.',
      sizes: [
        { size: 38, stock: 5 },
        { size: 39, stock: 4 },
        { size: 40, stock: 7 },
        { size: 41, stock: 6 },
        { size: 42, stock: 3 },
        { size: 43, stock: 2 },
        { size: 44, stock: 0 }
      ]
    },
    {
      id: 10,
      name: 'Golden Goose Classic',
      brand: 'GoldenGoose',
      price: 220,
      image: 'assets/Goldengoose3.png',
      description: 'დროულად ტრადიციული სტილი და დახვეწილი კომფორტი.',
      sizes: [
        { size: 38, stock: 4 },
        { size: 39, stock: 5 },
        { size: 40, stock: 8 },
        { size: 41, stock: 3 },
        { size: 42, stock: 6 },
        { size: 43, stock: 2 },
        { size: 44, stock: 1 }
      ]
    },

    // === 🐆 NEW PUMA COLLECTION ===
    {
      id: 11,
      name: 'Speedcat Og',
      brand: 'Puma',
      price: 189,
      image: 'assets/Puma1.png',
      description: 'სტილური და მსუბუქი მოდელი, შესაფერისი ყოველდღიური ტარებისთვის.',
      sizes: [
        { size: 38, stock: 5 },
        { size: 39, stock: 4 },
        { size: 40, stock: 6 },
        { size: 41, stock: 3 },
        { size: 42, stock: 7 },
        { size: 43, stock: 2 },
        { size: 44, stock: 1 }
      ]
    },
    {
      id: 12,
      name: 'Speedcat Og Blue',
      brand: 'Puma',
      price: 210,
      image: 'assets/Puma2.png',
      description: 'ფერადი დიზაინი და პრემიუმ კომფორტი — იდეალური casual სტილისთვის.',
      sizes: [
        { size: 38, stock: 8 },
        { size: 39, stock: 6 },
        { size: 40, stock: 5 },
        { size: 41, stock: 7 },
        { size: 42, stock: 4 },
        { size: 43, stock: 3 },
        { size: 44, stock: 2 }
      ]
    },
    {
      id: 13,
      name: 'Suede Classic PUMA Black',
      brand: 'Puma',
      price: 299,
      image: 'assets/Puma3.png',
      description: 'ფუტურისტული დიზაინი, მოქნილი ბალიშითა და სტაბილური outsole-ით.',
      sizes: [
        { size: 38, stock: 2 },
        { size: 39, stock: 3 },
        { size: 40, stock: 7 },
        { size: 41, stock: 4 },
        { size: 42, stock: 6 },
        { size: 43, stock: 5 },
        { size: 44, stock: 0 }
      ]
    },
    {
      id: 14,
      name: 'Puma - Suede XL',
      brand: 'Puma',
      price: 379,
      image: 'assets/Puma4.png',
      description: 'მაღალი პლატფორმა და მკვეთრი დიზაინი — განსაკუთრებული სტილისთვის.',
      sizes: [
        { size: 38, stock: 4 },
        { size: 39, stock: 5 },
        { size: 40, stock: 8 },
        { size: 41, stock: 6 },
        { size: 42, stock: 3 },
        { size: 43, stock: 1 },
        { size: 44, stock: 2 }
      ]
    },
    {
      id: 15,
      name: 'Puma - Palermo Premium',
      brand: 'Puma',
      price: 500,
      image: 'assets/Puma5.png',
      description: 'ფუტურისტული დიზაინი, მოქნილი ბალიშითა და სტაბილური outsole-ით.',
      sizes: [
        { size: 38, stock: 2 },
        { size: 39, stock: 3 },
        { size: 40, stock: 7 },
        { size: 41, stock: 4 },
        { size: 42, stock: 6 },
        { size: 43, stock: 5 },
        { size: 44, stock: 0 }
      ]
    }
  ];

  getProducts() {
    return this.products;
  }

  getPopularProducts() {
    return this.products.filter(p => [1, 2, 3, 4].includes(p.id));
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}