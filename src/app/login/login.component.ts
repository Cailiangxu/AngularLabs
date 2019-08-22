import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: Array<User>;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // init login form
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    // // create 3 static users for week4
    // this.users = [
    //   { email: 'user1@week4', password: 'user1' },
    //   { email: 'user2@week4', password: 'user2' },
    //   { email: 'user3@week4', password: 'user3' },
    // ];

    // get user from session storage, if exist, go to account page
    const user = sessionStorage.getItem('user');
    if (user) {
      this.router.navigate(['/account']);
    }
  }

  onSubmit() {
    const value = this.loginForm.value;
    if (!value.email || !value.password) {
      alert('Please input email and password!');
    } else {
      // // week 4
      // for (let user of this.users) {
      //   if (value.email === user.email && value.password === user.password) {
      //     sessionStorage.setItem('user', JSON.stringify({
      //       email: user.email,
      //     }));
      //     this.router.navigate(['/account']);
      //     return;
      //   }
      // }
      // alert('Wrong email or password!');

      // send auth request to server api
      this.authService.login(value)
        .subscribe(
          (data) => {
            // change JSON data to string and store in session storage
            sessionStorage.setItem('user', JSON.stringify(data));
            this.router.navigate(['/account']);
          },
          error => {
            // handle error
            console.warn(error);
            alert('Wrong email or password!');
          }
        );
    }
  }

}
