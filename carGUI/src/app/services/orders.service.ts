import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/orders';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }



  getOrders (): Observable<Order[]> {
    const urlOrders: string = 'RentalDetails/find'; 

    return this.http.get<Order[]>(baseUrl + urlOrders)
      .pipe(
        tap(_ => console.log('fetched orders' )) //,
        //catchError(this.handleError)
        
      );

      

      
  }

  
  
  DeleteOrder (order: Order ): Observable<Order> {

    const urlOrders: string = 'RentalDetails/delete/' + order.id;

    return this.http.delete<Order>(baseUrl + urlOrders).pipe(
      tap(_ => console.log(`deleted order number=${order.id}`)),
      //catchError(this.handleError<Car>('deleteHero'))
      );
  }

  UpdateOrder (order: Order): Observable<any> {

    const urlOrders: string = 'RentalDetails/update/';
    debugger;

    return this.http.put(baseUrl + urlOrders, order).pipe(
      tap(_ => console.log(`updated order number=${order.id}`))
    );
  }

  CreateOrder (order: Order): Observable<Order> {
    debugger;

    const urlOrders: string = 'RentalDetails/create/';
    
 

    return this.http.post<Order>(baseUrl + urlOrders, order, {headers:{'Content-Type': 'application/json'}}).pipe(
      tap(_ => console.log(`created order id=${order.id}`))
    );
}
}