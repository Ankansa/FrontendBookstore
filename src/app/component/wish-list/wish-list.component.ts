import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Service/wishlist/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  Wishlist:any;

  bookcount:any;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.getWishList()
  }


  getWishList() {
    console.log(" getWishList is called")
    this.wishlistService.getWishList().subscribe((responce: any) => {
      console.log("getWishList responce is :", responce)
      this.Wishlist=responce.data.books
      this.bookcount = responce.data.books.length
      console.log(" whishlist books are :",this.Wishlist)
    })
  }

  removeBook(bookID:any){
    console.log("Remove book from wishlist called")
    this.wishlistService.removeBook(bookID).subscribe((responce:any)=>{
      console.log("Responce from remove from wishlist api", responce)
    })

  }
}
