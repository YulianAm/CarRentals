import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../models/car';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { SearchFormDataService } from '../services/search-form-data.service';
import { searchFormStage1 } from '../models/searchFormStage1';

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

 cars: Car[];







  constructor(
    private carService: CarsService,
    private router: Router,
    private form: SearchFormDataService

    
    
    
    ) { }

  ngOnInit() {

    

    console.log('data passed:' + this.form.formData.pickUpDate);
    console.log('branch passed:' + this.form.formData.branch);
    
   

    this.Get();
    console.log(this.cars);

    



    
  }

  Get(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }
  


}

