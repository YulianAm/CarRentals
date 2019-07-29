import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { SearchFormDataService } from '../services/search-form-data.service';
import { Car } from '../models/car';
import { OrdersService } from '../services/orders.service';
import { Order } from '../models/orders';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { UserName } from '../models/userName';

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
    private form: SearchFormDataService,
    private orderService: OrdersService,
    private loginService: LoginService,
    private userService: UsersService


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

  onSubmit() {
    var newOrder  = new Order();
    var currentUser: User = new User();
    var username = new UserName();

    currentUser =  this.loginService.getCurrentUser();
    
    newOrder.startDate = this.form.formData.pickUpDate;
    newOrder.endDate = this.form.formData.returnDate;

    username.un = currentUser.userName;

    //newOrder.userId = +this.userService.getUserId(username) ;
    newOrder.userId = 1;
    newOrder.carNumber = this.form.formData.carToRent.carNumber;
    newOrder.isActive = true;
    newOrder.actualReturnDate = null;
    console.log("order submitted to service" + newOrder);
    debugger;

     

     
 
    this.orderService.CreateOrder(newOrder);
    
  }



}
