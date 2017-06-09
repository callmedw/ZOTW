import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
      <h3>Add a New Animal</h3>
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" #newName>
      </div>
      <div class="form-group">
        <label>Species:</label>
        <input class="form-control" #newSpecies>
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input class="form-control" #newAge>
      </div>
      <div class="form-group">
        <label>Diet:</label>
        <input class="form-control" #newDiet>
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input class="form-control" #newLocation>
      </div>
      <div class="form-group">
        <label>Number of Caretakers:</label>
        <input class="form-control" #newCaretakers>
      </div>
      <div class="form-group">
        <label>Sex:</label>
        <input class="form-control" #newSex>
      </div>
      <div class="form-group">
        <label>Likes:</label>
        <input class="form-control" #newLikes>
      </div>
      <div class="form-group">
        <label>Dislikes:</label>
        <input class="form-control" #newDislikes>
      </div>
      <button class="btn" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
      newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add this Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() doneAddClickedSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimaltoAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimaltoAdd);
    this.doneAddClickedSender.emit();
  }
}
