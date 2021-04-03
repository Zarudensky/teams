import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../entities';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: any;
  public user: Observable<User>;

  constructor(
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    public router: Router) {
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
  }

  loginWithGoogleService() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebookService() {
    return this.authLogin(new firebase.auth.FacebookAuthProvider());
  }

  authLogin(provider) {
    return this.fireAuth.signInWithPopup(provider)
    .then((result) => {
      console.log('login successful');
      // this.setParamUrlService(result.user.uid);
      this.updeteUserData(result.user);
    }).catch((error) => {
      console.log(error);
    })
  }

  setParamUrlService(uid) {
    this.activatedRoute.queryParams.subscribe(param => {
      this.router.navigate([], {
        queryParams: {
          uid: uid,
          language: param.language
        },
      });
    });
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

  logOutService() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      console.log('logout successful');
      this.userData = null;
    })
  }

}
