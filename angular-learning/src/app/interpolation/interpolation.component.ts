import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
  <h2>Welcome {{name}} </h2>
  <h2>{{siteUrl}}</h2>
  <input bind-disabled = "isDisabled" type="text" value= "Anshul">
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name = "Anshul Gupta";
  public siteUrl = window.location.href;
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
