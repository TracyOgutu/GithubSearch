import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from '../app/user';
import {Repository} from '../app/repository';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  
  username: string;
  user: User;
  repo: Repository;
  clientid = 'a6a8e31e2ec37f2baba1';
  clientsecret = '01a2125013475a9020258f7cfb75574d801c4692';


  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", "", 0, 0, new Date());
    this.repo = new Repository("", "", "")
    this.username = 'TracyOgutu';

  }
  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      url: string;
      bio: string;
      location: string;
      followers: number;
      following: number;
      creation: Date;
    }
  
  let promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.APIURL + this.username + environment.APIKEY).toPromise().then(response => {
      this.user.avatar_url = response.avatar_url
      this.user.name = response.name
      this.user.url = response.url
      this.user.bio = response.bio
      this.user.location = response.location
      this.user.followers = response.followers
      this.user.following = response.following
      this.user.creation = response.creation

      resolve()
    },
      error => {
        this.user.name = "Oops! Unable to get user.Sorry try again"
        reject(error)
      }
    )
  })
  return promise
}

getProfileInfo() {
  interface ApiResponse {
    login: string;
  }
  return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
}

getProfileRepos() {
  return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
}

updateProfile(username: string) {
  this.username = username;
}

}

// username: string;
  // user: User;
  // repo: Repository;

  // constructor(private http: HttpClient) {
  //   this.user = new User("", "", "", "", "", 0, 0, new Date());
  //   this.repo = new Repository("", "", "")
  //   this.username = " ";
  // }
  // searchUser() {
  //   interface ApiResponse {
  //     avatar_url: any;name: string;url: string;bio: string;location: string;followers: number;following: number;
  //     creation: Date;
  //   }
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>(environment.APIURL+ this.username + environment.APIKEY).toPromise().then(response => {
  //       this.user.avatar_url = response.avatar_url
  //       this.user.name = response.name
  //       this.user.url = response.url
  //       this.user.bio = response.bio
  //       this.user.location = response.location
  //       this.user.followers = response.followers
  //       this.user.following = response.following
  //       this.user.creation = response.creation

  //       resolve()
  //     },
  //       error => {
  //         this.user.name = "Username could not be retrieved."
  //         this.user.bio="User Bio not provided"
  //         reject(error)
  //       }
  //     )
  //   })
  //   return promise
  // }

  // searchRepository() {
  //   interface ApiResponse {
  //     name: string;description: string;html_url: string;
  //   }

  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>(environment.APIURL + this.username + environment.APIREPO).toPromise().then(response => {
  //       this.repo.name = response.name
  //       console.log(name)
  //       this.repo.description = response.description
  //       this.repo.html_url = response.html_url

  //       resolve()
  //     },
  //       error => {
  //         this.repo.name = "Repositories could not be retrieved."
  //         reject(error)
  //       }
  //     )
  //   })
  //   return promise
  // }
  // updateProfile(username: string) {
  //   this.username = username;
  // }