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
  MatTooltipModule,
  MatGridListModule,
  MatPaginatorModule,
  MatSortModule
  
 


} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
// import { MatPaginator } from '@angular/material';
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
    MatTooltipModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSortModule
    
   


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
    MatTooltipModule,
    MatGridListModule,
      MatPaginatorModule,
      MatSortModule
   
    
    

  ]
})
export class MaterialModule { }