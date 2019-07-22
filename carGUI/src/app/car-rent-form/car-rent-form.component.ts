import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../models/car';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';

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

  constructor(
    private carService: CarsService,
    private router: Router

    
    
    
    ) { }

  ngOnInit() {



    console.log(this.carService.carToRent);
    this.car = this.carService.carToRent;

    
  }
  RouterNavigateToCars(a: any) {


    console.log("object passed:" + a);
  }

}

//