import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from '../app/search';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  searches:Search[]=[];
  constructor(private http:HttpClient) { }

  searchUser(searchTerm:string){
    
    let searchEndpoint= "https://api.giphy.com/v1/gifs/search?api_key="+environment.APIKEY;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.searches=[];
            for(let i=0; i<results["data"].length; i++){
              let url = results["data"][i]["images"]["fixed_height"]["url"];
              let searchresult = new Search(url);
              this.searches.push(searchresult);
            }
            console.log(this.searches);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}
