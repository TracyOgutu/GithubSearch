import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import{Search} from '../search';
import{User} from '../user';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searches:Search[];
  user:User;
  constructor(public httpService:HttpServiceService, private http:HttpClient) {}

  ngOnInit() {
    
  }

  searchUser(searchTerm){
    this.httpService.searchUser(searchTerm).then(
      ()=>{
        this.searches=this.httpService.searches;
      },
      (error)=>{
        console.log(error)
      }
    )
    }
}
