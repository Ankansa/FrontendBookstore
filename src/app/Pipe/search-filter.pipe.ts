import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(content: any, searchString: string) {
    if (!searchString) {
      return content;
    }
    console.log(content)
    return content.filter((x: any) => x.bookName.toLocaleLowerCase() .includes(searchString)
      || x.author.toLocaleLowerCase().includes(searchString)
      
    );
  }

}
