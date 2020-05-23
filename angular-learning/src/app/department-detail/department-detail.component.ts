import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id= {{departmentId}}</h3>
    <p>
      <button class="anchor" (click)="showOverview()">Overview</button>&nbsp;
      <button class="anchor" (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button class="anchor" (click)="goPrevious()">Previous</button>&nbsp;
    <button class="anchor" (click)="goNext()">Next</button><br><br>
    </p>
    <div>
    <button class="anchor" (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id= parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId =id;
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId =id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/Departments',previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/Departments',nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/Departments',{id: selectedId, test: 'testValue'}]);
    this.router.navigate(['../',{id:selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }  
}
