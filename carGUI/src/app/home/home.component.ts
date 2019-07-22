import { Component, OnInit } from '@angular/core';

import { Car } from '../models/Car';
import { NavService } from '../services/nav.service';

import { CarTypesService } from '../services/car-types.service';
import { CarType } from '../models/carType';
import { Observable } from 'rxjs';
import { CarWithCarTypeDetails } from '../models/carWithTypeDetails';
import { delay } from 'rxjs/operators';
import { CarsService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[];
  carTypes: CarType[];
  CarAndType: CarWithCarTypeDetails[];
  searchValue;

  searchText;
  merged: Object[];
  manufacturersOrdered: string[];




  constructor(private carService: CarsService,

    private carTypeService: CarTypesService, private nav: NavService) { }

  ngOnInit() {


    // this.GetCars(); 
    this.GetCars();
    //this.GetCarTypes();


    //this.FillCarWithTypeDetails();





    this.nav.hide();


  }

  CarToRent(car: Car) {
    this.carService.carToRent = car;

  }


  GetCars(): void {
    this.carService.getCars().subscribe((cars) => {
      //debugger;

      this.cars = cars;
      console.log(this.cars);
    });
  }

  GetCarTypes(): void {
    this.carTypeService.getCarTypes()
      .subscribe((carTypes) => {
        debugger;

        this.carTypes = carTypes

      });

  }


  GetTypeById(carTypeId: number): CarType {
    return this.carTypes.find(x => x.id == carTypeId);


  }

  onEnter(event: any ) { this.searchValue = event.value; }
}





