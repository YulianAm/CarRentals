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
import { credentials } from '../models/credentials';
import { UserAuthentication } from '../services/user.authontication';

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
localCredentials: credentials;
newOrder: Order = new Order();


  constructor(
    private carService: CarsService,
    private router: Router,
    private form: SearchFormDataService,
    private orderService: OrdersService,
    private loginService: LoginService,
    private userService: UsersService,
    private userAuthentication: UserAuthentication


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
    
    
    //var currentUser: User = new User();
    //var username = new UserName();
    this.localCredentials = this.userAuthentication.getCurrentUser();
    //console.log("user id is:" + this.localCredentials.userId);
    
    

 
    

    
    this.newOrder.startDate = this.form.formData.pickUpDate;
    this.newOrder.returnDate = this.form.formData.returnDate;
    this.newOrder.carNumber = this.form.formData.carToRent.carNumber;
    this.newOrder.isActive = true;
    this.newOrder.actualReturnDate = this.form.formData.returnDate;
    this.newOrder.userId = this.localCredentials.userId;
    


    console.log("order submitted to service" + this.newOrder);
    

     

     
 
    this.orderService.CreateOrder(this.newOrder).subscribe();
    this.carService.updateIsAvailableById(this.newOrder.carNumber).subscribe();
alert("new car order sumbitted!")

    //var orderedCar  = this.carService.getCarById( this.newOrder.carNumber).subscribe();

    //console.log(orderedCar);
    
    
    

  }



}
