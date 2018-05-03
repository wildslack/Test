import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
  	console.log('ok');
  	this.http.get('http://localhost:3000/users').subscribe((users) => {
  		console.log('users', users);
  	});
  }

}
