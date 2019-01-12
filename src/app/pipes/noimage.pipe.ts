import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
  })
export class NoimagePipe implements PipeTransform {
  transform(images: any): string {
    if (!images) {
      // return 'assets/img/noimage.png';
    }

    if (images.url_small_image) {
      return images.url_small_image;
    }
    return 'assets/img/noimage.png';

    return null;
  }
}
