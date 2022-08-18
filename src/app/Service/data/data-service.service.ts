import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(details: string) {
    this.messageSource.next(details)
  }

}