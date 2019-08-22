import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: object;

  constructor(private router: Router) { }

  ngOnInit() {
    // get user from session storage
    const user = sessionStorage.getItem('user');
    // if no user, navigate to login page
    if (!user) {
      this.router.navigate(['/login']);
    } else {
      this.user = JSON.parse(user);
    }
  }

}
