import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  newEmployeeClicked = false
  employees = [
    {name: 'Dinesh', position: 'Web Developer'},
    {name: 'Virat', position: 'Python Developer'},
    {name: 'Rahul', position: 'Java Developer'}
  ]
 
  constructor() { }

  ngOnInit(): void {
  
  }

  model: any= {};
  model2: any= {};
  addEmployee(){
    this.employees.push(this.model);
    this.model = {}

    
  }
  

  deleteEmployee(i:any){
    this.employees.splice(i);
    console.log(i);

  }

  myValue: any;
  editEmployee(editEmployeeInfo: any){
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee(){
    let editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i==editEmployeeInfo){
        this.employees[i] = this.model2;
        this.model2 = {}
      }
      
    }
  }
  addNewEmployeeBtn(){
    this.newEmployeeClicked = !this.newEmployeeClicked;

    

  }
  

}
