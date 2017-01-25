import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, AngularFireModule, FIREBASE_PROVIDERS, FirebaseRef } from 'angularfire2';
import { masterFirebaseConfig } from '../api-keys';
import { firebaseAuthConfig } from '../app.module';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
 constructor(public af: AngularFire) {
   this.af.auth.subscribe(auth => console.log(auth));
 }


  login() {
    console.log("Logging in");
    this.af.auth.login();
    console.log("Logged in");
  }

  logout() {
    this.af.auth.logout();
  }
}
