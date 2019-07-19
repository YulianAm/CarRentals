import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../models/Car';
import { NavService } from '../services/nav.service';

import { CarTypesService } from '../services/car-types.service';
import { CarType } from '../models/carType';
import { Observable } from 'rxjs';
import { CarWithCarTypeDetails } from '../models/carWithTypeDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[];
  carTypes: CarType[];
  CarAndType: CarWithCarTypeDetails[];

  searchText;
  merged: Object[];
  manufacturersOrdered: string[];

 


  constructor(private carService: CarsService, 
    
    private carTypeService: CarTypesService, private nav: NavService) { }

  ngOnInit() { 
    
    
    // this.GetCars(); 
    
    this.FillCarWithTypeDetails();
    

  


    this.nav.hide();
    
    
  }

  
   GetCars(): void {
     this.carService.getCars().subscribe(cars => this.cars = cars);
    
   
    

   }

  GetCarTypes(): void {
    this.carTypeService.getCarTypes()
    .subscribe(carTypes =>  this.carTypes = carTypes);

    
    
  }


  GetTypeById(carTypeId: number): CarType 
  {
    return  this.carTypes.find(x => x.id == carTypeId);


  }



   FillCarWithTypeDetails() {

    this.GetCars();
    this.GetCarTypes(); 

    for (let i = 0; i < 2; i++) 
    {
      let newCar = new CarWithCarTypeDetails();
      let carRef = this.cars[i];
      

      


      newCar.carNumber = carRef.carNumber;
      newCar.carType = carRef.carType;
      newCar.region = carRef.region;
      newCar.mileage = carRef.mileage;
      newCar.manufacturer  = this.GetTypeById(carRef.carType).manufacturer;
      newCar.gearType  = this.GetTypeById(carRef.carType).gearType;
      newCar.carModel  = this.GetTypeById(carRef.carType).carModel;
      newCar.dailyCost  = this.GetTypeById(carRef.carType).dailyCost;
      newCar.dailyPenalty  = this.GetTypeById(carRef.carType).dailyPenalty;
      newCar.carModel  = this.GetTypeById(carRef.carType).carModel;
      newCar.ManufacuringYear  = this.GetTypeById(carRef.carType).ManufacuringYear;

    
      this.CarAndType.push(newCar);



  }
    





  }

  

}

