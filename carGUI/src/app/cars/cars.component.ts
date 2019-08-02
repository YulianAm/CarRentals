import { Component, OnInit } from '@angular/core'; 

import { Car } from '../models/car';
import { NavService } from '../services/nav.service';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';




@Component({
  selector: 'app-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarComponent implements OnInit  {

  editable: boolean;
  cars: Car[];
  car: Car;

  constructor(private carService: CarsService, 
    private router: Router,
    
    
    public nav: NavService) {
    
    
}


ngOnInit(): void {
  this.nav.show();

  this.Get();
}


Get(): void {
  this.carService.getCars()
  .subscribe(cars => this.cars = cars);
}

Delete(car: Car): void {
  if(confirm('you sure you want to delete  ' + car.carNumber + '?')) {  
    this.cars = this.cars.filter(h => h !== car);
    this.carService.deleteCar(car).subscribe();}
}

Edit(car: Car): void {
  //this.cars = this.cars.filter(h => h !== car);
  //this.carService.updateCar(car).subscribe();
  console.log(this.carService.carToEdit = car);
  this.carService.carToEdit = car;
  
  this.router.navigate(['/editCar']);

}

Edit2(car: Car): void {
  this.editable = true;
  //this.cars = this.cars.filter(h => h !== car);
  //this.carService.updateCar(car).subscribe();
  this.car = car;

  console.log(this.carService.carToEdit = car);
  this.carService.carToEdit = car;
  
 // this.router.navigate(['/editCar']);

}

noEdit() {
  this.editable = false;
}

}