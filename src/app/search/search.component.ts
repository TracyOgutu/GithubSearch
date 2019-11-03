import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import{Search} from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searches:Search[];
  constructor(public httpservice:HttpServiceService) {}

  ngOnInit() {
  }

  searchGiphy(searchTerm){
    this.giphyHttpService.searchGiphies(searchTerm).then(
      ()=>{
        this.giphies=this.giphyHttpService.giphies;
      },
      (error)=>{
        console.log(error)
      }
    )
    }
}
