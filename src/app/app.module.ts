import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { DepartmentListingComponent } from './department-listing/department-listing.component';
import { FormService } from "./shared/form-service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AddFormComponent } from './add-form/add-form.component';
import { MatDialog, MatDialogModule } from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    DepartmentListingComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
   entryComponents:[AddFormComponent],
  providers: [FormService,MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
