import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `


  <h3>View animals by age:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">View All Animals</option>
    <option value="youngAnimals">View Young Animals</option>
    <option value="matureAnimals">View Mature Animals</option>
  </select>

  <h3>View animals by Diet:</h3>
  <select (change)="onChangeDiet($event.target.value)">
    <option value="allDiets" selected="selected">View All Diets</option>
    <option value="Omnivore">View Omnivores</option>
    <option value="Carnivore">View Carnivores</option>
    <option value="Herbivore">View Herbivores</option>
  </select>
  <h3>See all animals currently at the Zoo</h3>


<div class="row">
  <div class="col-md-3" *ngFor="let currentAnimal of childAnimalList | animalAge:filterByAnimalAge | animalDiet:filterByAnimalDiet">
  <div class="animal-table">
    <table>
    <tr>
       <th><h3>{{currentAnimal.name}}</h3></th>
    </tr>
     <tr>
        <th><img class ="profile-pic" src="{{currentAnimal.image}}"></th>
     </tr>
     <tr>
        <th><h4>{{currentAnimal.species}}</h4></th>
     </tr>
     <tr>
        <td> age {{currentAnimal.age}}</td>
     </tr>
     <tr>
        <td>{{currentAnimal.sex}}</td>
     </tr>
     <tr>
        <td>{{currentAnimal.diet}}</td>
     </tr>
     <tr>
        <td>{{currentAnimal.caretakers}} caretakers</td>
     </tr>
     <tr>
        <td>@ {{currentAnimal.location}}</td>
     </tr>
     <tr>
        <td>{{currentAnimal.likes}}</td>
     </tr>
     <tr>
        <td>{{currentAnimal.dislikes}}</td>
     </tr>
     <br>
     <tr>
      <td><button (click)="editAnimalButtonClicked(currentAnimal)">Edit Info</button></td>
    </tr>
    <tr>
     <td><button (click)="deleteAnimalButtonClicked(currentAnimal)">Remove Animal</button></td>
   </tr>
  </table>
  <br>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() clickAddSender = new EventEmitter();
  @Output() clickDeleteSender = new EventEmitter();
  filterByAnimalAge: string = "allAnimals"
  filterByAnimalDiet: string = "allDiets"

  onChange(dropdownOptionSelected) {
    this.filterByAnimalAge = dropdownOptionSelected;
  }

  onChangeDiet(dropdownDietOptionSelected) {
    this.filterByAnimalDiet = dropdownDietOptionSelected;
  }

  editAnimalButtonClicked(childAnimalList: Animal[], animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  deleteAnimalButtonClicked(animalToRemove: Animal) {
    this.clickDeleteSender.emit(animalToRemove);
  }

  addAnimalButtonClicked() {
    this.clickAddSender.emit();
  }
}
