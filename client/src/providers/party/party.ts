import { Injectable } from '@angular/core';
import { Party } from '../../interfaces/Party';
import { Message } from '../../interfaces/Message';
import { FeathersPayload } from '../../interfaces/FeathersRespose';
import { app } from '../../feathers';

type PartiesResponse = FeathersPayload<Party>;
type MessagesResponse = FeathersPayload<Message>;

@Injectable()
export class PartyProvider {

  constructor() { }

  getParties(query?): Promise<PartiesResponse> {
    return app.service('parties').find({ 
      query: {
        $sort: { createdAt: -1 }
      },
    });
  }

  getPartiesByName(name: string): Promise<PartiesResponse> {
    return this.getParties({
      name: {
        $like: `${name}%`,
      },
    });
  }

  getUserParties(user_id): Promise<Party[]> {
    return app.service('group-users').find({ query: { user_id } })
      .then(response => response.data.map(data => data.party));
  }

  userInParties(user_id: string, parties: Party[]): Promise<boolean[]> {
    return Promise.all(parties.map(party =>
      app.service('group-users').find({ query: { party_id: party.id } })
        .then(groupUser => groupUser.user_id === user_id)
    ));
  }

  getPartyMessages(party_id): Promise<MessagesResponse> {
    return app.service('group-messages').find({
      query: {
        party_id,
        $sort: {createdAt: -1},
        $limit: 15,
      },
    })
    .then(async (response) => ({
      ...response,
      data: await Promise.all(response.data.map(this.getGroupMessageUser))
    }))
  }

  getGroupMessageUser(groupMessage) {
    return app.service('users').get(groupMessage.message.user_id)
    .then(user => ({
      ...groupMessage.message,
      username: user.username,
    }))
  }

  joinParty(user_id, party_id) {
    return app.service('group-users').create({ party_id, user_id });
  }

  createParty(data) {
    return app.service('parties').create(data);
  }

  createMessage(data) {
    return app.service('messages').create(data);
  }

  inviteUser(partyId, phoneNumber) {
    phoneNumber = `+1${phoneNumber.replace(/\D/g, '')}`
    return app.service('parties').patch(partyId, { phoneNumber });
  }

  rateParty(data){
    return app.service('party-ratings').create(data);
  }

  uploadToStory(data) {
    return app.service('media').create(data);
  }

  getPartyMedia(party: Party) {
    return app.service('media').find({
      query: {
        party_id: party.id,
        $sort: {
          createdAt: -1,
        },
      },
    }).then(media => ({ ...party, media }));
  }

  createGame(data) {
    return app.service('game').create(data);
  }

  findGame(party_id) {
    return app.service('game').find({
      query: {
        party_id
      }
    })
    .then((response) => {
      return response.data.filter(game => {
        return game.state !== 'ended';
      })
    })
  }

}
