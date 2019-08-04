import { Component, OnInit } from '@angular/core'; 

import { Car } from '../models/car';
import { NavService } from '../services/nav.service';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { BranchService } from '../services/branch.service';
import { branch } from '../models/branch';




@Component({
  selector: 'app-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarComponent implements OnInit  {

  editable: boolean;
  cars: Car[];
  car: Car;
  branches: branch[];
  branch: branch;
  branchId: number;



  constructor(private carService: CarsService, 
    private router: Router,
    private branchService: BranchService,
    
    
    public nav: NavService) {
    
    
}


ngOnInit(): void {
  this.nav.show();

  this.Get();
  this.GetBranches();

}

GetBranches(): void {
  this.branchService.getBranches().subscribe( (brnch) => {
    //debugger;

    this.branches = brnch;
    //console.log(this.branches);
  });
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

/*Edit(car: Car): void {
  //this.cars = this.cars.filter(h => h !== car);
  //this.carService.updateCar(car).subscribe();
  console.log(this.carService.carToEdit = car);
  this.carService.carToEdit = car;
  
  this.router.navigate(['/editCar']);

}*/

Edit2(car: Car): void {
  document.documentElement.scrollTop = 0;
  this.editable = true;

  //this.cars = this.cars.filter(h => h !== car);
  //this.carService.updateCar(car).subscribe();

  //this.carService.carToEdit = car;
  this.car = car;

 // console.log( this.carService.carToEdit);

  //console.log(this.carService.carToEdit = car);

  //this.carService.carToEdit = car;
  //this.carService.updateCar(car).subscribe();  
  

  
 // this.router.navigate(['/editCar']);

}

noEdit() {
  this.editable = false;
}

SendToEditService(car: Car) {
  //this.car.branchId = this.branch.id;
  //console.log(branch);
  console.log(car);

  this.carService.updateCar(car).subscribe();  
  console.log("subitted to server");

}

}