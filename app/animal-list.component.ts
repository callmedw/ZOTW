import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="">Sort Animals by Age</option>
      <option value="allAnimals">View All Animals</option>
      <option value="youngAnimals">View Young Animals</option>
      <option value="matureAnimals">View Mature Animals</option>
    </select>

    <select (change)="onChangeDiet($event.target.value)">
      <option value="" selected="selected">Sort Animals by Diet</option>
      <option value="allDiets">View All Diets</option>
      <option value="Omnivore">View Omnivores</option>
      <option value="Carnivore">View Carnivores</option>
      <option value="Herbivore">View Herbivores</option>
    </select>
    <br>
    <br>

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
            <td>Likes: {{currentAnimal.likes}}</td>
         </tr>
         <tr>
            <td>Dislikes: {{currentAnimal.dislikes}}</td>
         </tr>
         <br>
         <tr>
          <td><button class="btn" (click)="editAnimalButtonClicked(currentAnimal)">Edit Info</button></td>
        </tr>
        <tr>
         <td><button class="btn" (click)="deleteAnimalButtonClicked(currentAnimal)">Remove Animal</button></td>
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

  editAnimalButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  deleteAnimalButtonClicked(animalToRemove: Animal) {
    this.clickDeleteSender.emit(animalToRemove);
  }

  addAnimalButtonClicked() {
    this.clickAddSender.emit();
  }
}
