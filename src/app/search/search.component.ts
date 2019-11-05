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

  
      profile: any = {
        avatar_url: ''
      };
      repos: any = [];
      username: string;
      user: any;;
    
    
    
      constructor(private httpService:HttpServiceService) {
        this.httpService.getUserDetails().subscribe(user => {
          this.user = user;
          this.username = "";
        });
        this.httpService.getUserDetails().subscribe(profile => {
          this.profile = profile
        })
        this.httpService.getUserRepos().subscribe(repos => {
          this.repos = repos;
        });
    
      }
    
      userDetails() {
        this.httpService.updateProfile(this.username);
        this.httpService.userRequest()
        this.httpService.updateProfile(this.username);
        this.httpService.getUserDetails().subscribe(profile => {
          this.httpService.userRequest()
          this.user = this.httpService.user
          this.profile = profile
        });
        this.httpService.getUserRepos().subscribe(repos => {
          this.repos = repos;
        });
      }
    
  ngOnInit() {
    
  }

  
}
