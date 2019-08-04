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

  deleteCarType (type: CarType ): Observable<CarType> {

    const urlCars: string  = 'carTypes/delete/' + type.id;

    return this.http.delete<CarType>(baseUrl + urlCars).pipe(
      tap(_ => console.log(`deleted cartype id=${type.id}`)),
      //catchError(this.handleError<Car>('deleteHero'))
      );
  }

  updateCarType (type: CarType): Observable<any> {
    //var car = this.carToEdit;

    const urlCars: string = 'carTypes/update/';
    

    return this.http.put(baseUrl + urlCars, type).pipe(
      tap(_ => console.log(`updated cartype id=${type.id}`))
    );
  }

  
  
  CreateCarType (type: CarType): Observable<CarType> {
    //debugger;

    const urlCars: string = 'carTypes/create/';
    
 

    return this.http.post<CarType>(baseUrl + urlCars, type, {headers:{'Content-Type': 'application/json'}}).pipe(
      tap(_ => console.log(`created cartype id=${type.id}`))
    );

    
  }
  handleError(): void { console.log("error");}
  
}

