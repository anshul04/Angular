import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private _url: string = "/assets/data/employees.json";
  private _url: string = "/assets/data/employees1.json";// to check error on browser

  constructor(private http: HttpClient) { }

  // getEmployees(){
  //   return [
  //     {"id":1, "name":"Anshul", "age":27},
  //     {"id":2, "name":"Arjoo", "age":32},
  //     {"id":3, "name":"Mohit", "age":24},
  //     {"id":4, "name":"Sancheet", "age":21}
  //   ];
  // }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.erroHandler));
  }

  erroHandler(error: HttpErrorResponse) {
    //return throwError('Finally, successfully caught error');
    return throwError(error.message || 'server Error');
  }
}