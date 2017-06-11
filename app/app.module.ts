import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AnimalAgePipe } from './animal-age.pipe';
import { AnimalDietPipe } from './animal-diet.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AnimalListComponent,
    EditAnimalComponent,
    NewAnimalComponent,
    AnimalAgePipe,
    AnimalDietPipe
  ],
  bootstrap: [
    AppComponent ]
})

export class AppModule { }
