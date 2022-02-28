 /*
============================================
; Title:  wishlist.component.ts
; Author: Professor Krasso
; Date: 02/08/2022
; Modified By: Keith Hall
; Description: wishlist.component.ts for in-n-out-books app.
;===========================================
*/

 import { Component, OnInit } from '@angular/core';
 import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }
  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }

}
