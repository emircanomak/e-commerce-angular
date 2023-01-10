import {
  IProductModel
} from './../models/productModel';
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'customerPipe'
})
export class CustomerPipe implements PipeTransform {

  transform(value: IProductModel[], filterText: string): IProductModel[] {
    
    filterText = filterText ? filterText.toLocaleLowerCase() : null
    return filterText ? value.filter((p: IProductModel) => p.brand.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
