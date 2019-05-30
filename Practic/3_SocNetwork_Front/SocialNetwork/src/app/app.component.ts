import { Component, Input} from '@angular/core';
import {Reg_User} from './models/reg_user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialNetwork';

  @Input() user: Reg_User = {
    name: '',
    surname: '',
    password: '', 
    email: ''
  };

  constructor(private http: HttpClient) { }

  register() {
    console.log('yohhohoho');
    return this.http.post('http://localchost:3000/user', this.user).subscribe((data: any) => {
    console.log(data);
    });;
  }
  
}
