import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from "../detail/detail";
import { Task } from "../../model/task.model";
import { TaskService } from "../../service/task.service";
import { TaskPage } from "../task/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  tasks: Task[];
  constructor(public navCtrl: NavController, private taskService: TaskService) {

  }


  ionViewWillEnter() {
    console.log("Homepage is entered");
    this.taskService.getTasks().then(
      (tasks) => {
        this.tasks = tasks;
      }
    );
  }

  itemSelected(task: Task) {
    this.navCtrl.push(DetailPage, task);
  }

  onLoadNewTask() {
    this.navCtrl.push(TaskPage);
  }
}
