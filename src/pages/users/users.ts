import { TodosPage } from '../todos/todos';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: Observable<any[]>;
  itemUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbp: FirebaseProvider) {
    this.users = fbp.getUsers();
    this.itemUser = this.navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  itemUserClicked (user):void {
    console.log("USEER=:", user);
    this.navCtrl.push(TodosPage, user);
  }

}
