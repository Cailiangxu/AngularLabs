import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// auth service for app
export class AuthService {

  constructor(private client: HttpClient) { }

  // send POST request to server side to login
  login(data) {
    return this.client.post('http://127.0.0.1:3000/api/auth', data);
  }
}
