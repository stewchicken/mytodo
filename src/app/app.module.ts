import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VideoPlayer } from "@ionic-native/video-player";
import { OrderModule } from 'ngx-order-pipe';
//import { FileChooser } from '@ionic-native/file-chooser';
//import {DatePicker} from '@ionic-native/date-picker';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskService } from "../service/task.service";
import { TaskPage } from "../pages/task/task";
import { YoutubePage } from "../pages/youtube/youtube";
import { YoutubepipePipe } from '../pipes/youtubepipe/youtubepipe';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    TaskPage,
    YoutubePage,
    YoutubepipePipe
  ],
  imports: [
    BrowserModule,
    OrderModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    TaskPage,
    YoutubePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskService,
    VideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
