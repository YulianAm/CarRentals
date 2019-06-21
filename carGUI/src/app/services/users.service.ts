import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { User } from '../models/user';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //car: User []=[] ;
  formData: User;


  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]> {
    const urlUsers: string = 'users/find'; 

    return this.http.get<User[]>(baseUrl + urlUsers)
      .pipe(
        tap(_ => console.log('fetched users')) //,
        //catchError(this.handleError)
      );
      
  }





  deleteUser (user: User ): Observable<User> {

    const urlUsers: string = 'users/delete/' + user.id;

    return this.http.delete<User>(baseUrl + urlUsers).pipe(
      tap(_ => console.log(`deleted user id=${user.id}`)),
      //catchError(this.handleError<Car>('deleteHero'))
      );
  }

  updateUser (user: User): Observable<any> {

    const urlUsers: string = 'users/update/';

    return this.http.put(baseUrl +urlUsers, User).pipe(
      tap(_ => console.log(`updated user id=${user.id}`))
    );
  }



  CreateUser (user: User): Observable<User> {

    const urlUsers: string = 'users/create/';
    
 

    return this.http.post<User>(baseUrl + urlUsers, user, {headers:{'Content-Type': 'application/json'}}).pipe(
      tap(_ => console.log(`created user id=${user.firstName}`))
    );

    
  }


  handleError(): any { console.log("error");}
  




}
