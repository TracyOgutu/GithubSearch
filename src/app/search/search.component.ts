import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import{Search} from '../search';
import{User} from '../user';
import{HttpClient} from '@angular/common/http';
import{Repository} from '../repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // searches:Search[];
  // user:User;
  // constructor(public httpService:HttpServiceService, private http:HttpClient) {}
  user:User;
  repo:Repository;
  username:string;

  constructor(private httpService:HttpServiceService) { }

    getDetail() {
      this.httpService.updateProfile(this.username);
      this.httpService.searchUser()
      this.user = this.httpService.user
    }
    getDetail2(){
      this.httpService.updateProfile(this.username);
      this.httpService.searchRepository();
      this.repo=this.httpService.repo
      }

  ngOnInit() {
    
  }

  // searchUser(searchTerm){
  //   this.httpService.searchUser(searchTerm).then(
  //     ()=>{
  //       this.searches=this.httpService.searches;
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )
  //   }
}
