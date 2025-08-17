import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../product-details/product-details';
import { IProduct } from './product';
import { CartService } from '../cart/cart-service';
import { ProductService } from './product-service';
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductDetails, HttpClientModule, RouterModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit {

  products: IProduct[] = [];
  filter: string = '';
  private cartSvc: CartService = inject(CartService);

  constructor(
    private cartService: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.products = [
    {
      id: 1,
      name: "Espresso",
      description: "Strong and rich espresso shot made from premium Arabica beans.",
      price: 299,
      image: "espresso.jpg",
      category: "Hot Coffee",
      discount: 0
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "A perfect blend of espresso, steamed milk, and foam.",
      price: 99,
      image: "cappuccino.jpg",
      category: "Hot Coffee",
      discount: 0.5
    },
    {
      id: 3,
      name: "Latte",
      description: "Smooth espresso with steamed milk and a light layer of foam.",
      price: 89,
      image: "latte.jpg",
      category: "Hot Coffee",
      discount: 0.4
    },
    {
      id: 8,
      name: "Iced Mocha",
      description: "Chilled mocha with chocolate syrup, milk, and ice.",
      price: 199,
      image: "iced_mocha.jpg",
      category: "Iced Coffee",
      discount: 0.3
    },
    {
      id: 9,
      name: "Coffee Tonic",
      description: "Espresso poured over tonic water and ice for a citrusy refresh.",
      price: 159,
      image: "coffee_tonic.jpg",
      category: "Iced Coffee",
      discount: 0
    },
    {
      id: 10,
      name: "Mazagran",
      description: "Cold coffee with lemon juice, sugar, and ice.",
      price: 49,
      image: "mazagran.jpg",
      category: "Specialty",
      discount: 0.5
    },
    {
      id: 11,
      name: "Iced Caramel Latte",
      description: "Cold milk, espresso, caramel syrup, and ice.",
      price: 399,
      image: "iced_caramel_latte.jpg",
      category: "Iced Coffee",
      discount: 0.6
    },
    {
      id: 12,
      name: "Iced Honey Latte",
      description: "Cold milk, espresso, and honey over ice.",
      price: 4.5,
      image: "iced_honey_latte.jpg",
      category: "Iced Coffee",
      discount: 0
    },
    {
      id: 13,
      name: "Cinnamon Cappuccino",
      description: "Cappuccino topped with a dusting of cinnamon powder.",
      price: 289,
      image: "cinnamon_cappuccino.jpg",
      category: "Flavored Coffee",
      discount: 0.2
    },
    {
      id: 14,
      name: "White Chocolate Mocha",
      description: "Espresso with steamed milk and white chocolate syrup.",
      price: 169,
      image: "white_chocolate_mocha.jpg",
      category: "Flavored Coffee",
      discount: 0
    },
    {
      id: 15,
      name: "Coconut Latte",
      description: "Latte made with coconut milk for a tropical taste.",
      price: 179,
      image: "coconut_latte.jpg",
      category: "Flavored Coffee",
      discount: 0.6
    },
    {
      id: 16,
      name: "Almond Latte",
      description: "Latte made with almond milk for a nutty flavor.",
      price: 59,
      image: "almond_latte.jpg",
      category: "Specialty",
      discount: 0
    },
    {
      id: 17,
      name: "Rose Latte",
      description: "Latte infused with rose syrup and topped with petals.",
      price: 79,
      image: "rose_latte.jpg",
      category: "Flavored Coffee",
      discount: 0
    },
    {
      id: 18,
      name: "Maple Latte",
      description: "Espresso with steamed milk and maple syrup.",
      price: 119,
      image: "maple_latte.jpg",
      category: "Flavored Coffee",
      discount: 0.4
    },
    {
      id: 19,
      name: "Café Cubano",
      description: "Sweetened espresso shot, Cuban style.",
      price: 29.9,
      image: "cafe_cubano.jpg",
      category: "International Coffee",
      discount: 0
    },
    {
      id: 20,
      name: "Café Bombón",
      description: "Equal parts espresso and sweetened condensed milk.",
      price: 200,
      image: "cafe_bombon.jpg",
      category: "Specialty",
      discount: 0
    },
    {
      id: 21,
      name: "Café Con Leche",
      description: "Espresso with hot milk, popular in Latin America.",
      price: 100,
      image: "cafe_con_leche.jpg",
      category: "International Coffee",
      discount: 0.3
    },
    {
      id: 22,
      name: "Café Breve",
      description: "Espresso with steamed half-and-half instead of milk.",
      price: 55,
      image: "cafe_breve.jpg",
      category: "International Coffee",
      discount: 0
    },
    {
      id: 23,
      name: "Café de Olla",
      description: "Mexican coffee brewed with cinnamon and piloncillo.",
      price: 99,
      image: "cafe_de_olla.jpg",
      category: "International Coffee",
      discount: 0.25
    }
  ]
;
  }

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });

   this.route.queryParams.subscribe((params) => {
     this.filter=params['filter'] ?? '';
   })
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart'])
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: IProduct) => product.category === this.filter);
  }
}
