import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Task } from "../../model/task.model";
import { TaskService } from "../../service/task.service";


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private task: Task;
  constructor(public navCtrl: NavController, public navParams: NavParams,private taskService:TaskService) {
  }

  ionViewDidLoad() {
    this.task = this.navParams.data;
    //console.log('ionViewDidLoad DetailPage' + task.title + " " + task.detail);
  }

  deleteTask(){
    console.log("delete task "+this.task.title +"  "+this.task.detail);
    this.taskService.removeTask(this.task);
    this.navCtrl.pop();
  }

}
