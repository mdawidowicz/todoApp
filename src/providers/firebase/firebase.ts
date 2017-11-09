import { AngularFireDatabase } from 'angularfire2/database';

import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }
  getUsers() {
    return this.db.list('/users').valueChanges();
  }

}
