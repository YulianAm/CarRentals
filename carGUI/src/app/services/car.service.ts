import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { map, tap, catchError, distinct } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  car: Car []=[] ;
  carToRent: Car;
  carToEdit: Car;

  
  constructor(private http: HttpClient) {}

  getCars (): Observable<Car[]> {
    const urlCars: string = 'cars/find'; 

    return this.http.get<Car[]>(baseUrl + urlCars)
      .pipe(
        tap(_ => console.log('fetched cars' )) //,
        //catchError(this.handleError)
        
      );

      

      
  }

  getCarById (carNumber: string): Observable<Car> {
    const urlCars: string = 'cars/findById'; 

    return this.http.get<Car>(baseUrl + urlCars + carNumber)
      .pipe(
        tap(_ => console.log('fetched cars' )) //,
        //catchError(this.handleError)
        
      );

      

      
  }


  
  deleteCar (car: Car ): Observable<Car> {

    const urlCars: string = 'cars/delete/' + car.carNumber;

    return this.http.delete<Car>(baseUrl + urlCars).pipe(
      tap(_ => console.log(`deleted car number=${car.carNumber}`)),
      //catchError(this.handleError<Car>('deleteHero'))
      );
  }

  updateCar (car: Car): Observable<any> {
    //var car = this.carToEdit;

    const urlCars: string = 'cars/update/';
    

    return this.http.put(baseUrl + urlCars, car).pipe(
      tap(_ => console.log(`updated care number=${car.carNumber}`))
    );
  }

  updateIsAvailableById (carNumber: string): Observable<any> {
   // debugger;

    const urlCars: string = 'cars/updateIsAvailableById/';

    return this.http.put(baseUrl + urlCars + carNumber, carNumber).pipe(
      tap(_ => console.log(`updated care number=${carNumber}`))
    );
  }


  CreateCar (car: Car): Observable<Car> {
    debugger;

    const urlCars: string = 'cars/create/';
    
 

    return this.http.post<Car>(baseUrl + urlCars, car, {headers:{'Content-Type': 'application/json'}}).pipe(
      tap(_ => console.log(`created car id=${car.carNumber}`))
    );

    
  }
  handleError(): void { console.log("error");}
  
}

