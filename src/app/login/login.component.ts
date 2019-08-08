import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = [{ 'email': 'abc@com.au', 'pwd': '123' }, { 'email': 'abd@com.au', 'pwd': '123' }, { 'email': 'abe@com.au', 'pwd': '123' }];
  email: string = 'Email Address';
  password: string = 'password';
  error = false;
  hidemessage = true;

  constructor(private router: Router, private form: FormsModule) { }

  ngOnInit() {
  }

  itemClicked(){
    var match = false;

    for (let i = 0; i < this.users.length; i++) {
      if (this.email == this.users[i].email && this.password == this.users[i].pwd) {
        this.router.navigateByUrl('/account/'+ this.email);
        match = true;
      }
    }

    if (!match) {
      this.error = true;
      this.hidemessage = false;
    }
  }
}
