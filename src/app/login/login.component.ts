import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afauth: AngularFireAuth) {
  }

  login(){
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
