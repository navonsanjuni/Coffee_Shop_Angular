import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { Siteheader } from './siteheader/siteheader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Cart} from './cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,  // Add standalone: true
  imports: [
    CommonModule,   // Add CommonModule
    RouterOutlet,
    Home,
    Catalog,
    Siteheader,
    HttpClientModule,
    Cart
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffee-shop');
  currentDateTime = '2025-08-13 08:13:35';
  currentUser = 'navonsanjuni';

  constructor(private http: HttpClient) {}
}
