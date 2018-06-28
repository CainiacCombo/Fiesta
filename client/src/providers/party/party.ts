import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app } from '../../feathers';

@Injectable()
export class PartyProvider {

  constructor(public http: HttpClient) { }

  getUserParties(uid): Promise<any> {
    return app.service('group-users').find({ query: { user_id: uid } });
  }

  createParty(data) {
    return app.service('parties').create(data);
  };

}
