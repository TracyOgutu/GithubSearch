import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import{Search} from '../search';
import{User} from '../user';
import{HttpClient} from '@angular/common/http';
import{Repository} from '../repository';
import { isFulfilled } from 'q';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // searches:Search[];
  // user:User;
  // constructor(public httpService:HttpServiceService, private http:HttpClient) {}
  // user:User;
  // repo:Repository;
  // username:string;

  // constructor(private httpService:HttpServiceService) { }

  //   getDetail() {
  //     this.httpService.updateProfile(this.username);
  //     this.httpService.searchUser()
  //     this.user = this.httpService.user
  //     $("#userbios").show();
  //   }
  //   getDetail2(reposearch){

  //     if (reposearch){
  //       this.httpService.updateProfile(this.username);
  //       this.httpService.searchRepository()
  //       this.repo=this.httpService.repo
  //     }
  //     else{
  //       alert("error")
  //     }
      
  //     }
      profile: any = {
        avatar_url: ''
      };
      repos: any = [];
      username: string;
      user: any;;
    
    
    
      constructor(private httpService:HttpServiceService) {
        this.httpService.getProfileInfo().subscribe(user => {
          this.user = user;
          this.username = "";
        });
        this.httpService.getProfileInfo().subscribe(profile => {
          this.profile = profile
        })
        this.httpService.getProfileRepos().subscribe(repos => {
          this.repos = repos;
        });
    
      }
    
      userDetails() {
        this.httpService.updateProfile(this.username);
        this.httpService.userRequest()
        this.httpService.updateProfile(this.username);
        this.httpService.getProfileInfo().subscribe(profile => {
          this.httpService.userRequest()
          this.user = this.httpService.user
          this.profile = profile
        });
        this.httpService.getProfileRepos().subscribe(repos => {
          this.repos = repos;
        });
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
