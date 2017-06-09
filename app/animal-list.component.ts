import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">See All Animals</option>
    <option value="youngAnimals">View Young Animals</option>
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
    <button (click)="editAnimalButtonClicked(currentAnimal)">Edit Info</button></li>
  </ul>
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
