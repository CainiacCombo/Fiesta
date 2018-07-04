import { Injectable } from '@angular/core';
import { Party } from '../../interfaces/Party';
import { FeathersPayload } from '../../interfaces/FeathersRespose';
import { app } from '../../feathers';

const normalizePhoneNumber = (phoneNumber: string): string | false =>
  !/^1?[\-\. ]?\(?(\d{3})\)?[\-\. ]?\d{3}[\-\. ]?\d{4}$/.test(phoneNumber)
    ? phoneNumber.replace(/\D/g, '')
    : false;

type PartiesResponse = FeathersPayload<Party>;

@Injectable()
export class PartyProvider {

  constructor() { }

  getParties(query?): Promise<PartiesResponse> {
    return app.service('parties').find({ query });
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
    phoneNumber = `+1${normalizePhoneNumber(phoneNumber)}`;

    if (!phoneNumber) {
      return Promise.reject(new Error('Invalid Phone Number'));
    }

    return app.service('parties').patch(partyId, { phoneNumber });
  }

  rateParty(data){
    return app.service('party-ratings').create(data);
  }

}
