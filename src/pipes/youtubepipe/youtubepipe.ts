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
    console.log(value);
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
