import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();


  private searchMessageSource = new BehaviorSubject("");
  newSearchMessage = this.searchMessageSource.asObservable();


  constructor() { }

  changeMessage(details: string) {
    this.messageSource.next(details)
  }


  searchMessage(message: string) {
    this.searchMessageSource.next(message)
  }

 
// This is for make a "Observable" for getting name in profile

  // username=new BehaviorSubject<any>("Test Name")

}