import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-githubabout',
  templateUrl: './githubabout.component.html',
  styleUrls: ['./githubabout.component.css']
})
export class GithubaboutComponent implements OnInit {

  constructor(private httpService:HttpServiceService) { }

  ngOnInit() {
    this.httpService.searchUser();
  }

}
