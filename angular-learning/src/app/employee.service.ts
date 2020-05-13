import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"Anshul", "age":27},
      {"id":2, "name":"Arjoo", "age":32},
      {"id":3, "name":"Mohit", "age":24},
      {"id":4, "name":"Sancheet", "age":21}
    ];
  }
}
