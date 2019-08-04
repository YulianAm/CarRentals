import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Order } from '../models/orders';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: Order = {
    startDate: null,
    returnDate: null,
    actualReturnDate: null,
    userId: null,
    carNumber: null,
    isActive: true

  }
  
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    //this.Get();
  }

  Create(order: Order): void {

   
       //this.car.imagePath = "";
   
         console.log('created car:' + order);
         this.orderService.CreateOrder(order).subscribe();
          
   
   alert("order created");
   
           
         
   
     }






}
