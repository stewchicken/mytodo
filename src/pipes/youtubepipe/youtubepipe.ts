import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubepipe',
})
export class YoutubepipePipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {

  }
  transform(value: string, ...args) {
    value = value.replace("watch?v=", "embed/");

    if(value.indexOf("embed/")==-1){
      //https://youtu.be/FfIBowYfhdU
      value=value.replace("youtu.be","www.youtube.com/embed");
    }
    console.log(value);
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
