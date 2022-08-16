import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Service/book/book-service.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  books: any

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.allBooks()
  }


  allBooks() {
    this.bookService.getAllBooks().subscribe((items: any) => {
      console.log("All books are : ", items);
      this.books=items.data.reverse()
      console.log("Array of All books are : ", this.books);




    }, (error: any) => {
      console.log(error);
    })

  }

}
