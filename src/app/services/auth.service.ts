import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../entities';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public admin: boolean;
  public userData: any;
  public user: Observable<User>;

  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });

    this.user = this.fireAuth.authState
    .pipe(switchMap(user => {
        if(user) {
          return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null)
        }
      }));

    this.isAdminServise();
  }

  public loginWithGoogleService() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  public loginWithFacebookService() {
    return this.authLogin(new firebase.auth.FacebookAuthProvider());
  }

  public authLogin(provider) {
    return this.fireAuth.signInWithPopup(provider)
    .then((result) => {
      this.updeteUserData(result.user);
    }).catch((error) => {
      console.log(error);
    })
  }

  private updeteUserData(user) {
    return this.firestore.collection('users')
      .doc(user.uid)
      .set({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        roles: {
          editor: true
        }
      }, { merge: true });
  }

  public logOutService() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData = null;
    })
  }

  private isAdminServise() {
    this.user.subscribe(user => {
      if (!user) { 
        return this.admin = false
      }
      if (user.roles?.admin === true) {
        return this.admin = true;
      } else { 
        return this.admin = false
      }
    });
  }
}
