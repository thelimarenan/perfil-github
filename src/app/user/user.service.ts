import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  headers: any = {
    headers: new HttpHeaders({
      'Accept': 'application/vnd.github.machine-man-preview+json'
    })
  };
  path: string = "https://api.github.com";
  endpoint: any = {
    "user": "/users",
    "listRepos": "/repos"
  };

  constructor(private http: HttpClient) { }

  getDataUser(username: string) {
    let userList = this.path + this.endpoint.user + "/" + username;
    return this.http.get(userList, this.headers);
  }
}