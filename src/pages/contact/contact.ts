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

  /*
    playTabata1() {
      try {
        this.videoOptions = {
          volume: 1.0
        }
        //https://youtu.be/MIqvpJaUFJA
        let url = "file:///android_asset/www/assets/video/tabata1.mp4";
        this.videoPlayer.play(url, this.videoOptions);
      } catch (e) {
        console.error(e);
      }
    }
  */
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

  /*
    playTabata3() {
      try {
        this.videoOptions = {
          volume: 1.0
        }
        let url = this.url+"tabata3.mp4";
        console.log(url);
        this.videoPlayer.play(url, this.videoOptions);
      } catch (e) {
        console.error(e);
      }
    }
  
    playTabata4() {
      try {
        this.videoOptions = {
          volume: 1.0
        }
        let url = this.url+"tabata4.mp4";
        console.log(url);
        this.videoPlayer.play(url, this.videoOptions);
      } catch (e) {
        console.error(e);
      }
    }
  
  */

}
