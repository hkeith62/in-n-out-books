/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 02/04/2022
 * Modified by: Keith Hall
 * Description: Book interface object.
 */

 export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
