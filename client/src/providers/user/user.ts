import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/User';
import { GoogleUser } from '../../interfaces/GoogleUser';
import { app } from '../../feathers';

declare const gapi: any;
const GAPI_KEY = 'AIzaSyA5ywuy4AD7qzXvEqskL6Rzt3QFPFD0Aws';
const GAPI_CLIENT_ID = '508966744275-71kg0n4705b07hg8eembqfi4jc84q10q.apps.googleusercontent.com';

const initializeGoogle = () => new Promise((resolve, reject) => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: GAPI_KEY,
      clientId: GAPI_CLIENT_ID,
      scope: 'profile'
    }).then(resolve).catch(reject);
  });
});

const createGoogleProfile = (payload): GoogleUser => {
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
    email,
    name,
    avatar,
  };
};

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) { }

  authenticate(id, access_token): Promise<User> {
    return app.authenticate({ strategy: 'google', access_token })
      .then(() => this.findUser({ id }));
  }

  findUser(findBy) {
    return app.service('users').find({ query: findBy }).then(response => response.data[0]);
  }

  createUser(data) {
    return app.service('users').create(data);
  }

  updateUser(id, data): Promise<User> {
    return app.service('users').patch(id, data);
  }

  googleSignin() {
    return initializeGoogle()
      .then(() => {
        const instance = gapi.auth2.getAuthInstance();
        return instance.isSignedIn.get()
          ? instance.currentUser.get()
          : instance.signIn();
      })
      .then(createGoogleProfile);
  }

  googleSignout(): Promise<any> {
    return gapi.auth2.getAuthInstance().signOut();
  }

}
