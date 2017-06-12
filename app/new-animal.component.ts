import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <button *ngIf="!addForm"  (click)='showAddForm()'class="btn">Add a New Animal</button>
    <div *ngIf="addForm" class="addForm">
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
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" #newImage>
      </div>
      <div class="form-group">
        <label>Date Added:</label>
        <input class="form-control" value="{{month}}/{{day}}/{{year}}" #newDate>
      </div>
      <button class="btn" (click)='showAddForm()' class="btn"  (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newImage.value, newDate.value);
      newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; newImage.value=''; newDate.value=''">Add this Animal</button>
    </div>
    <br>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() doneAddClickedSender = new EventEmitter();
  addForm: boolean = false;
  currentTime = new Date();
    month: number = this.currentTime.getMonth() + 1;
    day: number = this.currentTime.getDate();
    year: number = this.currentTime.getFullYear();


  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, image: string, date: string) {
    var newAnimaltoAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes, image, date);
    this.newAnimalSender.emit(newAnimaltoAdd);
    this.doneAddClickedSender.emit();
  }

  showAddForm() {
    if(this.addForm === true) {
      this.addForm = false;
    } else {
      this.addForm = true;
    }
  }
}
