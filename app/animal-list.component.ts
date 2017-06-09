import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
    {{currentAnimal.species}} {{currentAnimal.name}}
    {{currentAnimal.age}},
    {{currentAnimal.diet}},
    {{currentAnimal.location}},
    {{currentAnimal.caretakers}},
    {{currentAnimal.sex}},
    {{currentAnimal.likes}},
    {{currentAnimal.dislikes}}
    <button (click)="editAnimal()">Edit!</button></li>
  </ul>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();


  editAnimal() {
    console.log("yup");
  }
}
