import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'writingusers'
})
export class WritingusersPipe implements PipeTransform {

  transform(wrusers: any[], user:String): String {
    if (wrusers != null && user != null){
      let result='';
      wrusers.splice(wrusers.indexOf(user),1);

      if(wrusers.length>=3){
        result=wrusers[0].valueOf()+', '+wrusers[1].valueOf()+', '+wrusers[2].valueOf()+' ... are typing';
      }
      else if(wrusers.length >=2){
        result=wrusers[0].valueOf()+', '+wrusers[1].valueOf()+' are typing';
      }
      else if(wrusers.length >=1){
        result=wrusers[0].valueOf()+' is typing';
      }
      //wrusers.push(user);
      console.log(result+' '+wrusers);
      return result;
    }

    return '';
  }

}
