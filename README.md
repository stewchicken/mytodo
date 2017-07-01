This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

```generate detail page
 ionic g page detail

npm install --save @ionic/storage

``` build app
http://ionicframework.com/docs/intro/deploying/

ionic cordova build --release android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks  /home/yw/ionic2/my-places/platforms/android/build/outputs/apk/android-release-unsigned.apk  my-alias

Built the following apk(s):
/home/yw/ionic2/mytodo/platforms/android/build/outputs/apk/android-release-unsigned.apk

/home/yw/Android/Sdk/build-tools/26.0.0/zipalign -v 4 android-release-unsigned.apk mytodo.apk

 ionic cordova plugin add https://github.com/moust/cordova-plugin-videoplayer.git --save

npm install --save @ionic-native/video-player

ionic cordova plugin add cordova-plugin-filechooser --save

npm install --save @ionic-native/file-chooser