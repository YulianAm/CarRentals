import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../models/Car';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarsService, private nav: NavService) { }

  ngOnInit() { this.Get(); this.nav.hide();
  }

  
  Get(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }
}
