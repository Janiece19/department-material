import { NgModule } from '@angular/core';

import {
  
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatTooltipModule
  


} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule



  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,

    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule


  ]
})
export class MaterialModule { }