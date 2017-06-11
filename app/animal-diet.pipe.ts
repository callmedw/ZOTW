import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "animalDiet",
  pure: false
})

export class AnimalDietPipe implements PipeTransform {
  transform(input: Animal[], dietOfAnimal) {
    var output: Animal[] = [];
    if(dietOfAnimal === "Carnivore") {
      for (var i =0; i < input.length; i++) {
        if(input[i].diet === "Carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (dietOfAnimal === "Omnivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (dietOfAnimal === "Herbivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
