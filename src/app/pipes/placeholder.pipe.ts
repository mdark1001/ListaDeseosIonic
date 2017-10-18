import {Pipe,PipeTransform} from "@angular/core";


@Pipe({
  name:'placeholderPipe'
})
export class placeholderPipe implements PipeTransform{
  transform(value:string,texto:string): string{



    return (value ? value:texto);
  }
}
