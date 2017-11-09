import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todos';

@NgModule({
  declarations: [
    TodosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosPage),
  ],
})
export class TodosPageModule {}
