import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo-Of-The-Wild</h1>
    <ul>
      <li *ngFor="let currentAnimal of masterAnimalList"><h3>{{currentAnimal.species}}</h3> {{currentAnimal.name}} {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}},
      {{currentAnimal.sex}},
      {{currentAnimal.likes}},
      {{currentAnimal.dislikes}}
      </li>
    </ul>
  </div>
  `
})


export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud Noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
  ];
}
