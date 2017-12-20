import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormService } from "../shared/form-service";
import { MatTableDataSource } from "@angular/material/table";
import { Department } from "../shared/form-model";
import { MatDialog, MatDialogRef, MatPaginator, MatSort } from "@angular/material";
import { AddFormComponent } from "../add-form/add-form.component";

@Component({
  selector: 'app-department-listing',
  templateUrl: './department-listing.component.html',
  styleUrls: ['./department-listing.component.css']
})
export class DepartmentListingComponent implements OnInit,AfterViewInit {
   @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  departments:Department[]
   dataSource;
   deptId:number;
   deptName:string;

  constructor(private _formService:FormService,public dialog:MatDialog) { }

  ngOnInit() {
    this.loadDepartments();
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }


displayedColumns = ['id','name','action'];
  // dataSource = new MatTableDataSource<Department>(this.departments);


   private loadDepartments() {
    this._formService.getDepartment().subscribe(
      (data) => {this.dataSource = new MatTableDataSource<Department>(data)
      this.departments=data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    console.log(this.departments)},
      (error) => console.error(error)
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



  showAddForm(): void {
    let dialogRef = this.dialog.open(AddFormComponent, {
      width: '250px',
      data: { id:0, name: this.deptName }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deptName = result;
      console.log(this.deptName);
      if(this.deptName && this.deptName.length>0)
      this.addDepartment(this.deptName);
    });
  }


  addDepartment(deptName: string) {
    let empObj = new Department;
    empObj.id = this.deptId;
    empObj.name = deptName;
    this._formService.saveDepartment(empObj).subscribe(
      (data) => {
        this.loadDepartments();
        console.log("add:"+data);
        
      },
      (error) => console.error(error)
    );
   
  }


  deleteRow(id: number) {
    this._formService.deleteDepartment(id).subscribe(
      (data) => {
        // alert('Department Delete SuccessFully');
        this.loadDepartments();
      },(error=>console.error(error))
    );
  }


  editRow(departments: Department) {
    if (departments == undefined) {
      throw new Error("Invalid input value")
    }
    try {

 let dialogRef = this.dialog.open(AddFormComponent, {
      width: '250px',
      data: { id:departments.id, name: departments.name }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("result:"+JSON.stringify(result));
      let dept=new Department();
      dept=result;
      if(dept)
      this.updateDepartment(dept);
    });

      
     
    } catch (error) {
      throw new Error(error);
    }
  }

updateDepartment(department) {
    let empObj = new Department;
    empObj.id = department.id;
    empObj.name =department.name;
    this._formService.updateDepartment(empObj).subscribe(
      (data) => {
        
        this.loadDepartments();
        
      },
      (error) => console.error(error)
    );
  }

}
