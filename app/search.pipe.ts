import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(value, [query]) {
    return query? value.filter((item) => item.name.indexOf(query) !== -1): value;
  }
}