import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  car: Car []=[] ;

  
  constructor(private http: HttpClient) {}

  getCars (): Observable<Car[]> {
    const urlCars: string = 'cars/find'; 

    return this.http.get<Car[]>(baseUrl + urlCars);
      //.pipe(
        tap(_ => console.log('fetched cars')) //,
        //catchError(this.handleError)
      //);
      
  }
  
  deleteCar (car: Car ): Observable<Car> {

    const urlCars: string = 'cars/delete/' + car.carNumber;

    return this.http.delete<Car>(baseUrl + urlCars).pipe(
      tap(_ => console.log(`deleted car number=${car.carNumber}`)),
      //catchError(this.handleError<Car>('deleteHero'))
      );
  }

  updateCar (car: Car): Observable<any> {

    const urlCars: string = 'cars/update/';

    return this.http.put(baseUrl + urlCars, Car).pipe(
      tap(_ => console.log(`updated care number=${car.carNumber}`))
    );
  }

  CreateCar (car: Car): Observable<Car> {

    const urlCars: string = 'cars/create/';
    
 

    return this.http.post<Car>(baseUrl + urlCars, car, {headers:{'Content-Type': 'application/json'}}).pipe(
      tap(_ => console.log(`created car id=${car.carNumber}`))
    );

    
  }
  handleError(): void { console.log("error");}
  
}
