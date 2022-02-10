import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Subscriber } from 'rxjs';
import { EmployeeModel } from '../form-data';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-crudwithjson',
  templateUrl: './crudwithjson.component.html',
  styleUrls: ['./crudwithjson.component.css']
})
export class CrudwithjsonComponent implements OnInit {

  formvalue!:FormGroup;
  employeemodelObj : EmployeeModel = new EmployeeModel;
  employeeData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
  
 this.formvalue = this.formbuilder.group({
   firstName : [''],
   lastName : [''],
   email : [''],
   mobile : [''],
   salary : [''],
 })
  this.getAllEmployees();
}
  clickAddEmployee(){
    this.formvalue.reset();
    this.showAdd= true;
    this.showUpdate= false;
  }

postEmployeeDetails(){
  this.employeemodelObj.firstName = this.formvalue.value.firstName;
  this.employeemodelObj.lastName = this.formvalue.value.lastName;
  this.employeemodelObj.email = this.formvalue.value.email;
  this.employeemodelObj.mobile = this.formvalue.value.mobile;
  this.employeemodelObj.salary = this.formvalue.value.salary;

  

  this.api.postEmployee(this.employeemodelObj).subscribe(res=>{
    console.log(res);
    alert("Employee Record Added Successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getAllEmployees();
  },
  err=>{
    alert("Something Went Wrong, Please Check Again")
  })

  }
  getAllEmployees(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData = res;
    })
  }

  deleteEmployee(emp:any){
    this.api.deleteEmployee(emp.id).subscribe(res=>{
      alert("Employee Record Deleted")
      this.getAllEmployees();
    })
  }
  
  onEdit(emp:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeemodelObj.id = emp.id;
    this.formvalue.controls['firstName'].setValue(emp.firstName)
    this.formvalue.controls['lastName'].setValue(emp.lastName)
    this.formvalue.controls['email'].setValue(emp.email)
    this.formvalue.controls['mobile'].setValue(emp.mobile)
    this.formvalue.controls['salary'].setValue(emp.salary)
  }

  updateEmployee(){
  this.employeemodelObj.firstName = this.formvalue.value.firstName;
  this.employeemodelObj.lastName = this.formvalue.value.lastName;
  this.employeemodelObj.email = this.formvalue.value.email;
  this.employeemodelObj.mobile = this.formvalue.value.mobile;
  this.employeemodelObj.salary = this.formvalue.value.salary;

  this.api.updateEmployee(this.employeemodelObj, this.employeemodelObj.id).subscribe(res=>{
    alert("Employee Record Updated!")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getAllEmployees();
  })
  }
}



