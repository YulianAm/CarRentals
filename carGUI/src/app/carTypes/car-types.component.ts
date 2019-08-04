import { Component, OnInit } from '@angular/core';
import { CarType } from '../models/carType';
import { CarTypesService } from '../services/car-types.service';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-car-types',
  templateUrl: './car-types.component.html',
  styleUrls: ['./car-types.component.css']
})
export class CarTypesComponent implements OnInit {

  editable: boolean;
  cars: CarType[];
  car: CarType;



  constructor(
    private carService: CarTypesService, 
    private router: Router,
    public nav: NavService

  ) { }

  ngOnInit(): void {
    this.nav.show();
  
    this.Get();
    

  
  }
  

  
  Get(): void {
    this.carService.getCarTypes()
    .subscribe(cars => this.cars = cars);
    
  }
  

  Delete(car: CarType): void {
    if(confirm('you sure you want to delete  ' + car.id + '?')) {  
      this.cars = this.cars.filter(h => h !== car);
      this.carService.deleteCarType(car).subscribe();}
  }
  
  
  Edit2(car: CarType): void {
    document.documentElement.scrollTop = 0;
    this.editable = true;
    console.log(this.cars);
  
  
    this.car = car;
  
   
  
  }
  
  noEdit() {
    this.editable = false;
  }
  
  SendToEditService(car: CarType) {

    console.log(car);
  
    this.carService.updateCarType(car).subscribe();  
    console.log("subitted to server");
    alert("submitted succefully");
  
  }

}
