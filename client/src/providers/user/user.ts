import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { app } from '../../feathers';
import { User } from '../../interfaces/User';
import { FriendRequest } from '../../interfaces/FriendRequest';
import { Party } from '../../interfaces/Party';
import { GoogleUser } from '../../interfaces/GoogleUser';
import { FeathersPayload } from '../../interfaces/FeathersRespose';

interface GroupUser {
  id: number
  is_host: boolean,
  createdAt: string
  updatedAt: string
  user_id: string
  party_id?: string
  party: Party
}

type UsersResponse = FeathersPayload<User>;
type GroupUsersResponse = FeathersPayload<GroupUser>;
type FriendRequestsResponse = FeathersPayload<FriendRequest>;

const createGoogleProfile = (payload): GoogleUser => ({
  accessToken: payload.accessToken,
  googleId: payload.userId,
  email: payload.email,
  name: payload.displayName,
  avatar: payload.imageUrl,
});

@Injectable()
export class UserProvider {

  constructor(public googlePlus: GooglePlus) { }

  authenticate(id, access_token): Promise<User> {
    return app.authenticate({ strategy: 'google', access_token })
      .then(() => this.findUser({ id }));
  }

  findUser(findBy): Promise<User> {
    return app.service('users').find({ query: findBy }).then(response => response.data[0]);
  }

  createUser(data): Promise<User> {
    return app.service('users').create(data);
  }

  updateUser(id, data): Promise<User> {
    return app.service('users').patch(id, data);
  }

  googleSignin(): Promise<GoogleUser> {
    return this.googlePlus.login({}).then(createGoogleProfile);
  }

  googleSignout() {
    return this.googlePlus.disconnect();
  }

  getUsers(query?): Promise<UsersResponse> {
    return app.service('users').find({ query });
  }

  getHostOfParty(party_id: string, user_id: any): Promise<GroupUsersResponse> {
    return app.service('group-users').find({
      query: { 
        user_id,
        party_id,
        is_host: true 
      } })
 }

  getUsersByUsername(username: string): Promise<UsersResponse> {
    return this.getUsers({
      username: {
        $like: `${username}%`,
      },
    });
  }

  getUserParties(user_id): Promise<GroupUsersResponse> {
    return app.service('group-users').find({
      query: { 
        user_id,
        $sort: {createdAt: -1 },
      },
    });
  }

  getUsersInParty(party_id): Promise<UsersResponse> {
    return app.service('group-users').find({ query: { party_id } })
  }

  getUserFriends(user_id): Promise<UsersResponse> {
    return app.service('friends').find({ query: { user_id } });
  }

  getToFriendRequests(user_id): Promise<FriendRequestsResponse> {
    return app.service('friend-requests').find({ query: { to_user_id: user_id }});
  }

  getFromFriendRequests(user_id): Promise<FriendRequestsResponse> {
    return app.service('friend-requests').find({ query: { from_user_id: user_id }});
  }

  acceptFriendRequest(to_user_id, from_user_id) {
    return app.service('friends').create({
      user1_id: to_user_id,
      user2_id: from_user_id,
    });
  }

  declineFriendRequest(friendRequestId) {
    return app.service('friend-requests').delete(friendRequestId);
  }

  sendFriendRequest(from_user_id, to_user_id) {
    return app.service('friend-requests').create({ from_user_id, to_user_id });
  }

  findFriendship(user1_id, user2_id) {
    return Promise.all([
      app.service('friends').find({
        query: {
          user1_id,
          user2_id,
        },
      }),
      app.service('friends').find({
        query: {
          user1_id: user2_id,
          user2_id: user1_id,
        },
      }),
    ]).then((values) => {
      const friendship1 = values[0].data[0];
      const friendship2 = values[1].data[0];

      if (friendship1) {
        return friendship1.id;
      } else if (friendship2) {
        return friendship2.id;
      } else {
        return null;
      }
    });
  }

  unfriend(user1_id, user2_id) {
    return this.findFriendship(user1_id, user2_id)
      .then(id => app.service('friends').remove(id));
  }

}
