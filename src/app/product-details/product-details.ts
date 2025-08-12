import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

@Input() product!: IProduct;
@Output() buy = new EventEmitter()

    getImageUrl(product: IProduct){
      if(!product) return '';
      return '/assets/images/' + product.image;
  }

   getDiscountedClasses(product: IProduct) {
    if(product.discount > 0)
    return 'strikethrough bold';
    else return '';
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit();

  }

}
