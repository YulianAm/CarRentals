import { Injectable } from '@angular/core';  
import {HttpClient, HttpBackend} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { User } from '../models/user';
import { UserTypeEnum } from '../models/userTypeEnum';
import { tap } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { credentials } from '../models/credentials';


@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  Url :string;  
  token : string;  
  header : any;  

  constructor(private http : HttpClient, handler: HttpBackend) {   
    this.http = new HttpClient(handler);
    this.Url = baseUrl + 'Login/';  
  
    const headerSettings: {   [name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : credentials){  
    //debugger;  
    
   return this.http.post<any>(this.Url+'UserLogin',model,{ headers: this.header});  
  }  


  LoginRefactor(credetianls : credentials): Observable<User>  {

    return this.http.post<User>(this.Url+'login', credentials);



  }
     


   CreateUser(user:User)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<User[]>(this.Url + '/createcontact/', user, httpOptions)  
   }  

   GetBase64(): any {
    var user = this.getCurrentUser();
    return window.btoa(user.userName + ":" + user.userPassword);
  }

    static ManagerGuard: any;


  getCurrentUser(): User {
    
    var user = localStorage["user"];

    if (user) {
      var userData: User = JSON.parse(user);
    }

    return userData;
  }

  /*get UserType(): UserTypeEnum {
    let user: User = this.getCurrentUser();
    if (user) {
      return user.userType;
    }
    return UserTypeEnum.Unknown;
  }*/

  login(userData: credentials, userType: number, userId: number) {
    userData.userType = userType;
    userData.userId = userId;
    console.log("local stroage set");

    localStorage.setItem("user", JSON.stringify(userData));
  }

  logout() {
    localStorage.removeItem("user");
  }

/*
  getUserType (userLogin: any): Observable<any> {
    const url: string = 'http://localhost:58725/api/Login/UserLogin'; 

    return this.http.post(url, userLogin).pipe(
      tap(_ => console.log(`fetched user type`))
    );
      
  }*/
 
}  