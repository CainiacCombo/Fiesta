import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app } from '../../feathers';

declare const gapi: any;
const GAPI_KEY = 'AIzaSyA5ywuy4AD7qzXvEqskL6Rzt3QFPFD0Aws';
const GAPI_CLIENT_ID = '508966744275-71kg0n4705b07hg8eembqfi4jc84q10q.apps.googleusercontent.com';

interface GoogleAuth {
  googleId: string
  name: string
  email: string
  avatar: string
  accessToken: string
}

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) { }

  authenticate(payload) {
    return app.authenticate(payload);
  }

  findUser(findBy) {
    return app.service('users').find(findBy).then(response => response.data[0]);
  }

  createUser(data) {
    return app.service('users').create(data);
  }

  private getGoogleProfile(payload): GoogleAuth {
    const auth = payload.getAuthResponse();
    const accessToken = auth.access_token;
    
    const user = payload.getBasicProfile();
    const googleId = user.getId();
    const name = user.getName();
    const email = user.getEmail();
    const avatar = user.getImageUrl();

    return {
      accessToken,
      googleId,
      name,
      email,
      avatar,
    };
  }

  googleSignin() {
    return new Promise<GoogleAuth>((resolve, reject) => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: GAPI_KEY,
          clientId: GAPI_CLIENT_ID,
          scope: 'profile'
        })
        .then(() => {
          const instance = gapi.auth2.getAuthInstance();
          return instance.isSignedIn.get()
            ? instance.currentUser.get()
            : instance.signIn();
        })
        .then(payload => this.getGoogleProfile(payload))
        .then(profile => resolve(profile))
        .catch(error => reject(error));
      });
    });
  }

}
