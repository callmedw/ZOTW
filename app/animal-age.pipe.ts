import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "animalAge",
  pure: false

})

export class animalAgePipe implements PipeTransform {
  transform(input: Animal[], ageOfAnimal) {
    var output: Animal[] = [];
    if(ageOfAnimal === "youngAnimals") {
      for (var i =0; i < input.length; i++) {
        if(input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (ageOfAnimal === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
