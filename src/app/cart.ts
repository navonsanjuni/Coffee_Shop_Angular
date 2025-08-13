import { Injectable } from '@angular/core';
import { IProduct } from '../app/catalog/product';
import { ILineItem } from '../app/catalog/line-item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private cart: ILineItem[] = [];
  //
  //
  // constructor(){}
  //
  // getTotalPrice(){
  //   return (
  //     Math.round(
  //       this.cart.reduce<number>((prev, cur) => {
  //         return (
  //           prev + cur.qty * (cur.product.price *(1 - cur.product.discount))
  //         );
  //       }, 0) * 100
  //     ) / 100
  //   );
  // }
  //
  // findLineItem(product: IProduct){
  //   return this.cart.find((li) => li.product.id === product.id);
  // }
  //
  // add(product: IProduct){
  //
  //     let lineItem = this.findLineItem(product);
  //     if(lineItem !== undefined){
  //       lineItem.qty++;
  //     }else{
  //       lineItem = {product: product, qty: 1};
  //       this.cart.push(lineItem);
  //     }

  private cart:IProduct[]=[];

  constructor(private http: HttpClient) {
  }

  add(product:IProduct){
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() =>{
      console.log(' added ' +product.name+ ' to cart!');

    })
  }

    // console.log(' added ' +product.name+ ' to cart!');
    // console.log('Total price: $' + this.getTotalPrice());


}
