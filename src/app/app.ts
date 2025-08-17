import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { HttpClientModule } from '@angular/common/http';
import {Siteheader} from './siteheader/siteheader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Home,
    Catalog,
    Cart,
    HttpClientModule,
    Siteheader
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffee-shop');
  currentDateTime = '2025-08-13 09:49:41';
  currentUser = 'navonsanjuni';
}
