import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../models/car';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { SearchFormDataService } from '../services/search-form-data.service';
import { searchFormStage1 } from '../models/searchFormStage1';
import { CarType } from '../models/carType';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-car-rent-form',
  templateUrl: './car-rent-form.component.html',
  styleUrls: ['./car-rent-form.component.css']
})
export class CarRentFormComponent implements OnInit {
 car: Car;
 totalCost: number;
 totalPenalty: number;
 numberOfRentDays: number;

 cars: Car[];

 uniqueTypes: CarType[];







  constructor(
    private carService: CarsService,
    private router: Router,
    private form: SearchFormDataService

    
    
    
    ) { }

  ngOnInit() {

    

    console.log('data passed:' + this.form.formData.pickUpDate);
    console.log('branch passed:' + this.form.formData.branch);
    
   

    this.Get();
    //this.GetTotalCostAndDays();
 

    console.log(this.cars);

    



    
  }

  Get(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  GetTotalCostAndDays() {

    var diffMillisec = this.form.formData.returnDate.getTime() - this.form.formData.pickUpDate.getTime();

    this.numberOfRentDays = Math.round(Math.abs(diffMillisec/(1000*60*60*24)));
    
  }
  GoToRentCarPage(car: Car){
    console.log(car);
  }
  


}

