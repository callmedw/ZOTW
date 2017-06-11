import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Zoo of the Wild</h1>
      </div>
      <div class="box">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (clickDeleteSender)="deleteAnimal($event)"></animal-list>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      </div>
    </div>
    <br>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud Noises', 'http://elelur.com/data_images/mammals/arctic-fox/arctic-fox-02.jpg'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 'http://felid-tag.org/wp-content/uploads/2014/03/ocelot2-Dan-Bodenstein1.jpg'),
  ];
  selectedAnimal: Animal = null;
  chosenAnimal: Animal;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal);
  }

  deleteAnimal(thisAnimal: Animal) {
    var index = this.masterAnimalList.indexOf(thisAnimal);
    this.masterAnimalList.splice(index, 1);
  }
}
