import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // tslint:disable-next-line: typedef
  getEmployees() {
    return [
      {id: 1, name: 'Tom', age: 30},
      {id: 2, name: 'Brandon', age: 25},
      {id: 3, name: 'Christina', age: 26},
      {id: 4, name: 'Elena', age: 28}
    ];
  }

}
