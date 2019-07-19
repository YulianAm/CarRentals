import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { CarType } from '../models/carType';


@Injectable({
  providedIn: 'root'
})
export class CarTypesService {
  carTypes: CarType []=[] ;
  
  constructor(private http: HttpClient) { }

  getCarTypes (): Observable<CarType[]> {
    const urlCars: string = 'carTypes/find'; 

    return this.http.get<CarType[]>(baseUrl + urlCars)
      .pipe(
        tap(_ => console.log('fetched car types')) //,
        //catchError(this.handleError)
      );
      
  }

  
  

}
