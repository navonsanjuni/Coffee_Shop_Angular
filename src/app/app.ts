import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { Siteheader } from './siteheader/siteheader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Catalog, Siteheader, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('coffee-shop');

  constructor(private http: HttpClient) {}
}


