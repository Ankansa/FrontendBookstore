import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/Service/data/data-service.service';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss']
})
export class BookActionComponent implements OnInit {

  bookDetails:any;
  subscription: Subscription;

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(responce => this.bookDetails = responce)
  }

}
