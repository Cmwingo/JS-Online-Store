import { Component, OnInit, Inject, Output } from '@angular/core';
import { AngularFire, AngularFireModule, FIREBASE_PROVIDERS, FirebaseRef } from 'angularfire2';
import { masterFirebaseConfig } from '../api-keys';
import { firebaseAuthConfig } from '../app.module';
import { User } from '../user.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  currentUser: User;
 constructor(public af: AngularFire) {
   this.af.auth.subscribe(auth => this.currentUser = {
     userName: auth.google.displayName,
     email: auth.google.email,
     anonymous: false,
     uniqueId: auth.google.uid
   });
   let obj: any = FirebaseRef;                     //This is good code here
   let auth: any = obj.$firebaseAuth();             //Returns no errors so object
   auth.$signInWithRedirect(firebaseAuthConfig);  //does contain the methods
 }

 @Output() userEmitter;

  login() {
    console.log("Logging in");
    this.af.auth.login();
    console.log("Current User" + this.currentUser.userName);
  }

  logout() {
    this.af.auth.logout();
    console.log("Current User" + this.currentUser.userName);
  }
}
