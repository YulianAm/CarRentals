import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { SearchFormDataService } from '../services/search-form-data.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-final-rent-form',
  templateUrl: './final-rent-form.component.html',
  styleUrls: ['./final-rent-form.component.css']
})
export class FinalRentFormComponent implements OnInit {
carToRent: Car;
numberOfRentDays: number;
totalCost: number;
totalPenalty: number;


  constructor(
    private carService: CarsService,
    private router: Router,
    private form: SearchFormDataService


  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    //this.GetTotalCostAndDays();
  }

  GetTotalCostAndDays() {
    //console.log(this.form.formData.returnDate.getTime   );
    //console.log(this.form.formData.pickUpDate.getTime );



    
  }



}
