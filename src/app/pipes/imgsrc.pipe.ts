import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from '../services/http.service';
@Pipe({
  name: 'imgsrc'
})
export class ImgsrcPipe implements PipeTransform {

  transform(value: string, args?: any): any {
  // : todo 暂未实现    所有img src pipe
    if (!value) {
      return '../../assets/mrtx.jpg';
    }
    if (value.startsWith('http') || value.startsWith('data:image') || value.startsWith('file:///') || value.startsWith('cdvfile://')) {
      return value;
    } else {
      return args + value;
    }
  }

}
