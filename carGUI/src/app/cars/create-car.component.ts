import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  cars: Car[];

  car: Car = {
    carNumber: null,
    carType: null,
    imagePath: null,
    isAvailable: null,
    isUndamaged: null,
    region: null,
    mileage: null
  }
  
 

 
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.Get();
  }

  
  Create(car: Car): void {


    this.car.imagePath = "";

      console.log('created car:' + car);
      this.carsService.CreateCar(this.car).subscribe();

  }

  Get(): void {
    this.carsService.getCars()
    .subscribe(cars => this.cars = cars);
  }
 
}
