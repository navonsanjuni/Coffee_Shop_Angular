import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-siteheader',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './siteheader.html',
  styleUrl: './siteheader.css'
})
export class Siteheader {
  currentUser = 'navonsanjuni';
  currentDateTime = '2025-08-13 10:08:24';
}
