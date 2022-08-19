import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Service/cart/cart.service';
import { DataServiceService } from 'src/app/Service/data/data-service.service';
import { WishlistService } from 'src/app/Service/wishlist/wishlist.service';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss']
})
export class BookActionComponent implements OnInit {

  bookDetails:any;
  subscription: Subscription;

  constructor(private dataService:DataServiceService, private cartService:CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(responce => this.bookDetails = responce)
  }

addToCart(bookid:any){
  console.log("add to cart book details is called")
  return this.cartService.addToCart(bookid).subscribe((Response=>{
    console.log("add to cart book details is :",Response)
  }))
}

addToWishlist(bookid:any){
  console.log("add to wishlist book details is called")
  return this.wishlistService.addToWishlist(bookid).subscribe((Response=>{
    console.log("add to wishlist book details is :",Response)
  }))
}

}
