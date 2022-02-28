/**
 * Title: book-details-dialog.component
 * Author: Professor Krasso
 * Date: 02/07/2022
 * Modified By: Keith Hall
 * Description: Book details dialog.
 */

 import { Component, OnInit, Inject } from '@angular/core';
 import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
 import { IBook } from '../book.interface';

 @Component({
   selector: 'app-book-details-dialog',
   templateUrl: './book-details-dialog.component.html',
   styleUrls: ['./book-details-dialog.component.scss']
 })
 export class BookDetailsDialogComponent implements OnInit {

   book: IBook;

   constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
     this.book = data.book;
   }

   ngOnInit(): void {
   }
 }
