import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
