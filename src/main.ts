import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
