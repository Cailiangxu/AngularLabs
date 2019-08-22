import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

interface User {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User;

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

    // init profile form according to user
    this.profileForm = new FormGroup({
      username: new FormControl(this.user.username),
      birthdate: new FormControl(this.user.birthdate),
      age: new FormControl(this.user.age),
      email: new FormControl(this.user.email),
      valid: new FormControl(this.user.valid),
    });
  }

  onSubmit() {
    const value = this.profileForm.value;
    // check values in form
    if (!value.username || !value.birthdate || !value.age || !value.email || value.valid == null) {
      alert('Empty field is not allowed!');
    } else if (isNaN(value.age)) {
      // check age is integer
      alert('Age must be an integer!');
    } else if (value.valid.toString() !== 'true' && value.valid.toString() !== 'false') {
      // check valid is boolean
      alert('Valid must be a boolean!');
    } else {
      value.age = parseInt(value.age);
      value.valid = (value.valid === 'true');
      // store the changed profile in session storage
      sessionStorage.setItem('user', JSON.stringify(value));
      alert('Update profile successfully');
    }
  }

}
