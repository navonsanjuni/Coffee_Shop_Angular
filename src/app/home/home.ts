import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule  // Make sure RouterModule is imported
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  // Your component logic here
}
