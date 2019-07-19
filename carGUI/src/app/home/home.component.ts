import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../models/Car';
import { NavService } from '../services/nav.service';

import { CarTypesService } from '../services/car-types.service';
import { CarType } from '../models/carType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[];
  carTypes: CarType[];
  searchText;
  merged: Object[];

 


  constructor(private carService: CarsService, 
    
    private carTypeService: CarTypesService, private nav: NavService) { }

  ngOnInit() { 
    
    this.GetCars(); 
    
    this.GetCarTypes(); 

  


    this.nav.hide();
    
    
  }

  
  GetCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars)    ;
   
    

  }

  GetCarTypes(): void {
    this.carTypeService.getCarTypes()
    .subscribe(carTypes =>  {this.carTypes = carTypes});

    
    
  }

  GetManufacturer(carType: number  ) {
   
//


    return this.carTypes[1].carManufacturer;

    //console.log(this.merged[0]);

  }
  //

}

