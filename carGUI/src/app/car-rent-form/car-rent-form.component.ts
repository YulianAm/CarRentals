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

  
  GoToRentCarPage(car: Car){
    console.log(car);
    this.form.formData.carToRent = car;

    this.form.formData.totalRentCost = this.form.formData.totalNumbweOfDays * this.form.formData.carToRent.carTypeObject.dailyCost;
    this.form.formData.totalPenaltyCost = this.form.formData.totalNumbweOfDays * this.form.formData.carToRent.carTypeObject.dailyPenalty;


    this.router.navigate(['/finalForm']);

  }
  


}

