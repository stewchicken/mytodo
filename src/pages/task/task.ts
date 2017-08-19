import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TaskService } from "../../service/task.service";
import { Task } from "../../model/task.model";
import { DatePicker } from '@ionic-native/date-picker';


@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService) {
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

}
