import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email:string ='';
  psw: string ='';

  ppp;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toLogin(){
    this.router.navigateByUrl('/login');
    
    
  }
}
