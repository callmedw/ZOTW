import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList"><h3>{{currentAnimal.species}}</h3> {{currentAnimal.name}} {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}},
    {{currentAnimal.sex}},
    {{currentAnimal.likes}},
    {{currentAnimal.dislikes}}
    </li>
  </ul>

  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal[];
}
