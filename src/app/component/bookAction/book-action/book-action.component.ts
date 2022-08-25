import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { BookServiceService } from 'src/app/Service/book/book-service.service';
import { CartService } from 'src/app/Service/cart/cart.service';
import { DataServiceService } from 'src/app/Service/data/data-service.service';
import { WishlistService } from 'src/app/Service/wishlist/wishlist.service';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss']
})
export class BookActionComponent implements OnInit {

  bookDetails: any;
  subscription: Subscription;
  allFeedbacksArray: any
  starValue: number
  userName: any

  constructor(private dataService: DataServiceService, private cartService: CartService,
    private wishlistService: WishlistService, private bookService: BookServiceService, private snakbar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe((responce: any) => {
      this.bookDetails = responce
      this.getAllFeedback(responce._id)
    })
    this.userName = localStorage.getItem("Name")
  }

  addToCart(bookid: any) {
    console.log("add to cart book details is called")
    return this.cartService.addToCart(bookid).subscribe((Response => {
      console.log("add to cart book details is :", Response)

      this.snakbar.open('Book Sucessfully Added To Cart', 'Ok', {
        duration: 4000
      });
    }))
  }

  addToWishlist(bookid: any) {
    console.log("add to wishlist book details is called")
    return this.wishlistService.addToWishlist(bookid).subscribe((Response => {
      console.log("add to wishlist book details is :", Response)
      console.log("addToWishlist function BookId is :", bookid)

      this.snakbar.open('Book Sucessfully Added To Wishlist', 'Ok', {
        duration: 4000
      });
    }))
  }

  getStarValue(value: any) {
    console.log("Star value is :", value)
    this.starValue = value
  }


  addFeedback(bookid: any, comment: any) {
    console.log("feedback function is called")
    let requearData = {
      UserName: this.userName,
      feedback: comment,
      star: this.starValue
    }
    console.log("The user name is :", requearData.UserName)
    return this.bookService.addFeedback(bookid, requearData).subscribe((responce: any) => {
      console.log("feedback function responce is :", responce)
      console.log("feedback function BookId is :", bookid)

      this.snakbar.open('Review submited Sucessfully', 'Ok', {
        duration: 4000
      });
    })
  }


  getAllFeedback(bookid: any) {
    console.log("getAllFeedback function is called")
    return this.bookService.AllFeedback(bookid).subscribe((responce: any) => {
      this.allFeedbacksArray = responce.data.userAdded
      console.log("getAllFeedback function responce is :", responce.data.userAdded)
      // console.log("getAllFeedback function BookId is :",bookid)
    })
  }

  
}
