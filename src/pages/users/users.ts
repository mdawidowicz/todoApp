import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbp: FirebaseProvider) {
    this.users = fbp.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
