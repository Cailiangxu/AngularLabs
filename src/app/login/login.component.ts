import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private router: Router;
  
  private username: string;
  private password: string;
  private showError: Boolean = false;
  private knownUsers = [
    {username: 'steve', password: '12345'},
    {username: 'dave', password: 'abcde'},
    {username: 'pete', password: 'password'}
  ];

  private login(){
    
    let user = {username: this.username, password: this.password};

    // if the user matches a known user
    for (let knownUser of this.knownUsers){
      if (JSON.stringify(user) === JSON.stringify(knownUser)){
        // navigate to account page
        this.router.navigateByUrl('/account');
        return;
      }
    }
    // else display error message
    this.showError = true;
    return;
  }
}
