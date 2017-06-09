import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <h3>See all animals currently at the Zoo</h3>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
    {{currentAnimal.name}},
    {{currentAnimal.species}}
    {{currentAnimal.age}},
    {{currentAnimal.diet}},
    {{currentAnimal.location}},
    {{currentAnimal.caretakers}},
    {{currentAnimal.sex}},
    {{currentAnimal.likes}},
    {{currentAnimal.dislikes}}
    <button (click)="editAnimalButtonClicked(currentAnimal)">Edit Info</button></li>
  </ul>
  <br>

  <h3>View animals by age:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="youngAnimals" selected="selected">View Young Animals</option>
    <option value="matureAnimals">View Mature Animals</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | animalAge:filterByAnimalAge">
    {{currentAnimal.name}},
    {{currentAnimal.species}}
    {{currentAnimal.age}},
    {{currentAnimal.diet}},
    {{currentAnimal.location}},
    {{currentAnimal.caretakers}},
    {{currentAnimal.sex}},
    {{currentAnimal.likes}},
    {{currentAnimal.dislikes}}
  </ul>
  <br>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() clickAddSender = new EventEmitter();
  filterByAnimalAge: string = "youngAnimals"


  onChange(dropdownOptionSelected) {
    this.filterByAnimalAge = dropdownOptionSelected;
  }

  editAnimalButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  addAnimalButtonClicked() {
    this.clickAddSender.emit();
  }
}
