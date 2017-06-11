import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal" class="addForm">
      <h3>Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      </div>
      <div class="form-group">
        <label>Species:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
      </div>
      <div class="form-group">
        <label>Diet:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
      </div>
      <div class="form-group">
        <label>Number of Caretakers:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
      </div>
      <div class="form-group">
        <label>Sex:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
      </div>
      <div class="form-group">
        <label>Likes:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
      </div>
      <div class="form-group">
        <label>Dislikes:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.image">
      </div>
        <button class="btn" (click)="doneButtonClicked()">Done</button>
    </div>
    <br>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked () {
    this.doneButtonClickedSender.emit();
  }
}
