import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from "@ionic-native/video-player";
//import { DetailPage } from "../detail/detail";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  videoOptions: VideoOptions;
  url: string = "file:///android_asset/www/assets/video/";
  constructor(public navCtrl: NavController, private videoPlayer: VideoPlayer) {

  }

  
  playTabata(name: string) {
    try {
      this.videoOptions = {
        volume: 1.0
      }
      let url = this.url + name;
      console.log(url);
      this.videoPlayer.play(url, this.videoOptions);
    } catch (e) {
      console.error(e);
    }
  }
}
