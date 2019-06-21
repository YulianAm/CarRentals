import { Component, OnInit } from '@angular/core'; 
import { CarsService } from '../services/cars.service';
import { Car } from '../models/car';
import { NavService } from '../services/nav.service';




@Component({
  selector: 'app-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarComponent implements OnInit  {

  
  cars: Car[];

  constructor(private carService: CarsService, public nav: NavService) {
    
    
}


ngOnInit(): void {
  //this.nav.show();

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
  this.cars = this.cars.filter(h => h !== car);
  this.carService.updateCar(car).subscribe();
}


}