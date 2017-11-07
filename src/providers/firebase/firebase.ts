import { AngularFireDatabase } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }
  getUsers() {
    return this.db.list('/users').valueChanges();
  }

}
