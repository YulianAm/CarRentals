import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';
import { Order } from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  editable: boolean;
  orders: Order[];
  order: Order;
 



  constructor(private orderService: OrdersService, 
    private router: Router,

    
    
    public nav: NavService) {
    
    
}


ngOnInit(): void {
  this.nav.show();

  this.Get();


}



Get(): void {
  this.orderService.getOrders()
  .subscribe(orders => this.orders = orders);
}

Delete(order: Order): void {
  if(confirm('you sure you want to delete  ' + order.id + '?')) {  
    this.orders = this.orders.filter(h => h !== order);
    this.orderService.DeleteOrder(order).subscribe();}
}

/*Edit(car: Car): void {
  //this.cars = this.cars.filter(h => h !== car);
  //this.carService.updateCar(car).subscribe();
  console.log(this.carService.carToEdit = car);
  this.carService.carToEdit = car;
  
  this.router.navigate(['/editCar']);

}*/

Edit2(order: Order): void {
  document.documentElement.scrollTop = 0;
  this.editable = true;

  //this.cars = this.cars.filter(h => h !== car);
  //this.carService.updateCar(car).subscribe();

  //this.carService.carToEdit = car;
  this.order = order;

 // console.log( this.carService.carToEdit);

  //console.log(this.carService.carToEdit = car);

  //this.carService.carToEdit = car;
  //this.carService.updateCar(car).subscribe();  
  

  
 // this.router.navigate(['/editCar']);

}

noEdit() {
  this.editable = false;
}

SendToEditService(order: Order) {
  //this.car.branchId = this.branch.id;
  //console.log(branch);
  console.log(order);

  this.orderService.UpdateOrder(order).subscribe();  
  console.log("subitted to server");
  alert("submitted succefully");

}

}