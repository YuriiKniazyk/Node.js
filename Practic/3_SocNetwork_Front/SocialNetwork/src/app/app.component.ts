import { Component, Input} from '@angular/core';
import {Reg_User} from './models/reg_user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SocialNetwork';

    user: Reg_User = {
    name: '',
    surname: '',
    password: '', 
    email: ''
  };

  constructor(private http: HttpClient) { }

  register() {
    console.log(this.user);
    return this.http.post('http://localhost:3000/user', this.user).subscribe((data) => {
      console.log(data);
    });
  }
  
}