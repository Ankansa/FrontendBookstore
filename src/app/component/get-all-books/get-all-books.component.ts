import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Service/book/book-service.service';
import { DataServiceService } from 'src/app/Service/data/data-service.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  books: any

  totalBooks:any

  searchString: any;

  page:number = 1;


  constructor(private bookService: BookServiceService, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.allBooks()
    this.dataService.newSearchMessage.subscribe(message => this.searchString = message)
  }


  allBooks() {
    this.bookService.getAllBooks().subscribe((items: any) => {
      console.log("All books are : ", items);
      this.books=items.data.reverse()
      this.totalBooks= items.data.length

      console.log("Array of All books are : ", this.books);

    }, (error: any) => {
      console.log(error);
    })

  }

  bookDetails(book:any) {
    this.dataService.changeMessage(book)
    console.log(book)
  }

}
