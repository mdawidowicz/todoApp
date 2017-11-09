import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  todos: any[];
  itemToDo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    this.todos = this.navParams.data.todos;
    // this.itemToDo = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }

}
