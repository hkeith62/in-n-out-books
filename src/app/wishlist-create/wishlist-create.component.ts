 /*
============================================
; Title:  wishlist-create.component.ts
; Author: Professor Krasso
; Date: 02/08/2022
; Modified By: Keith Hall
; Description: Component.ts for in-n-out-books app.
;===========================================
*/
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

	@Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;


  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
  addItem() {

    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;

  }

}
