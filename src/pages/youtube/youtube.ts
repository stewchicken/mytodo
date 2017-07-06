import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Video } from "../../model/video.model";
import { TaskService } from "../../service/task.service";
import { UUID } from 'angular2-uuid';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {
  @ViewChild("f") // here refers to html's ngForm
  fForm: NgForm;

  videos: Video[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubePage');
    this.taskService.getVideos().then(
      (videos) => {
        this.videos = videos;
      }
    );
  }
  deleteAll() {
    this.taskService.removeAllViedos();
    this.videos = [];
  }

  delete(video) {
    this.taskService.removeVideo(video).then(
      (videos) => {
        this.videos = videos;
      }
    );
  }


  onAddYoutube(video: Video) {
    console.log(this.fForm);
    video.id = UUID.UUID();
    this.taskService.addVideo(video).then(
      (videos) => {
        this.videos = videos;
        this.fForm.reset();
      }
    );
  }
}