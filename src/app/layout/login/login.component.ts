import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/shared/modelo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  users: Array<User>;
  emailLogin: string;
  senhaLogin: string;
  constructor() {
    this.user = new User("teste","teste@gmail.com","03/05/1894","12345");
    this.emailLogin = '';
    this.senhaLogin = ''
  }

  ngOnInit(): void {
  }

  verification(){
    if(this.user.email === this.emailLogin && this.user.senha === this.senhaLogin){
      window.location.href = "/home";
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
