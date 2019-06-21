import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../services/login.service';    
 import { FormsModule } from '@angular/forms';    
import { NavService } from '../services/nav.service';
import { UsersService } from '../services/users.service';
import { credentials } from '../models/credentials';
import { User } from '../models/User';
    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent {    
  model : any={}; 
  //public credentials =  new credentials();    
    
  errorMessage:string;    
  constructor(private router:Router,private LoginService:LoginService, public nav: NavService, private usersService: UsersService) { }    
    
    
  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
    this.nav.hide();

  }    

/*
  loginRefactor(): void {
    //alert(this.credentials.userName + this.credentials.userPassword);

    let ob = this.LoginService.LoginRefactor(this.credentials);
    ob.subscribe( user => {  
      console.log(user);
      if(!user) { alert("no such user"); }
      else {

        this.router.navigate(['/admin']); 
      }



               } , response => {
                 console.log("error", response);
               });
                           




  } */ 


  
  login(){    
    

    //debugger;    


    this.LoginService.Login(this.model).subscribe(    
      data => {    
        //debugger;    
        if(data.Status=="success admin"  )    
        {
          //this.model.userType = "admin";
          this.nav.show();       
          this.router.navigate(['/admin']);    
          //debugger;    
          console.log('success login admin');
        }    
        else if (data.Status=="success user") {      
        {
          //this.model.userType = "user";
          this.nav.show();       
          this.router.navigate(['/home']);    
          //debugger;    
          console.log('success login user');
        }    

        }
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
      this.LoginService.login(this.model);
  };    
  

 }     