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
        <br>
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (clickDeleteSender)="deleteAnimal($event)"></animal-list>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      </div>
    </div>
    <br>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Moon', 'Arctic Fox', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud Noises', 'http://elelur.com/data_images/mammals/arctic-fox/arctic-fox-02.jpg', '11/30/2014'),
    new Animal('Prince', 'Ocelot', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 'http://felid-tag.org/wp-content/uploads/2014/03/ocelot2-Dan-Bodenstein1.jpg', '6/11/2017'),
    new Animal('Friendly', 'Cabybara', 2, 'Herbivore', 'Southern Swamp', 3, 'Female', 'Sunny Naps', 'Being Alone', 'http://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/capybara.jpg?itok=XHdneBUA', '2/7/2015')
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
    console.log(this.masterAnimalList);
  }

  deleteAnimal(thisAnimal: Animal) {
    var index = this.masterAnimalList.indexOf(thisAnimal);
    this.masterAnimalList.splice(index, 1);
  }
}
