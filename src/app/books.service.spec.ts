 /*
============================================
; Title: books.service.spec.ts
; Author: Professor Krasso
; Date: 02/08/2022
; Modified By: Keith Hall
; Description: Books.service component spec.ts file.
;===========================================
*/
import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
