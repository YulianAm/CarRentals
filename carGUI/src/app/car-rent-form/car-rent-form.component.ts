import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../models/car';
import { CarsService } from '../services/car.service';

@Component({
  selector: 'app-car-rent-form',
  templateUrl: './car-rent-form.component.html',
  styleUrls: ['./car-rent-form.component.css']
})
export class CarRentFormComponent implements OnInit {
 car: Car;
 pickUpDate: Date;
 returnDate: Date;
 totalCost: number;
 totalPenalty: number;

  constructor(private carService: CarsService) { }

  ngOnInit() {
    console.log(this.carService.carToRent);
    this.car = this.carService.carToRent;

    
  }

}

//