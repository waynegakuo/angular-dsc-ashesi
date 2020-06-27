import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.service.getEmployees();
  }

}
