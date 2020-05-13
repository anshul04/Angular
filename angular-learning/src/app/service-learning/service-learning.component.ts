import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-learning',
  template: `
    <h2>Employee List:</h2>
    <ul *ngFor= "let emp of employees">
      <li>{{emp.id}}. {{emp.name}} - {{emp.age}}</li>
    </ul>
  `,
  styleUrls: ['./service-learning.component.css']
})
export class ServiceLearningComponent implements OnInit {
  public employees = [
    {"id":1,"name":"Anshul","age":28},
    {"id":2,"name":"Arjoo","age":34},
    {"id":3,"name":"Mohit","age":25},
    {"id":4,"name":"Sancheet","age":21}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
