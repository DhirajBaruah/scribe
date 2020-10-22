import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  signup(firstName: string, lastName: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          response.user
            .updateProfile({
              displayName: firstName + ' ' + lastName,
              photoURL: 'https://avatarfiles.alphacoders.com/343/34399.gif',
            })
            .then(() => {
              resolve(response.user);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
