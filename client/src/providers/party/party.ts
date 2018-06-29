import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Party } from '../../interfaces/Party';
import { app } from '../../feathers';

@Injectable()
export class PartyProvider {

  constructor(public http: HttpClient) { }

  getUserParties(uid): Promise<Party[]> {
    return app.service('group-users').find({ query: { user_id: uid } })
      .then(response => response.data.map(data => data.party))
  }

  createParty(data) {
    return app.service('parties').create(data);
  }

  createMessage(data) {
    return app.service('messages').create(data);
  }

  inviteUser(partyId, phoneNumber) {
    return app.service('parties').patch(partyId, { phoneNumber });
  }

}
