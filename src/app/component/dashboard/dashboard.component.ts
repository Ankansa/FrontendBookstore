import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Service/data/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token')
  }

  newMessage(value:any) {
    this.dataService.searchMessage(value)
    console.log("Search bar function calld",value)
  }

}
