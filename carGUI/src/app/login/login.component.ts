import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../services/login.service';    
 import { FormsModule } from '@angular/forms';    
import { NavService } from '../services/nav.service';
import { UsersService } from '../services/users.service';
import { credentials } from '../models/credentials';
import { User } from '../models/User';
import { UserTypeEnum } from '../models/userTypeEnum';
    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent {    
  model : credentials = new credentials (); 
  //public credentials =  new credentials();    
    
  errorMessage:string;   
  userType: number; 

  constructor(private router:Router,private LoginService:LoginService,  
    public nav: NavService, private usersService: UsersService 
    ) { }    
    
  //

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
    this.nav.hide();

  }    
  
  login(){    
    

    //debugger;    



  


console.log(this.model);

    this.LoginService.Login(this.model).subscribe(    
      data => {    
        //debugger;    

        if(data.Status=="success admin"  )    
        {
          this.userType = 1;
          this.LoginService.login(this.model, this.userType);
          //this.model.userType = "admin";
          this.nav.show();       
          this.router.navigate(['/admin']);    
          //debugger;    
          console.log('success login admin');
         
        }    
        else if (data.Status=="success user") {      
        {
          this.userType = 2;
          this.LoginService.login(this.model, this.userType);
          //this.model.userType = "user";
          this.nav.show();       
          this.router.navigate(['/home']);    
          //debugger;    
          console.log('success login user');
          
        }    

        }
        else{    
          this.userType = 3;
          this.LoginService.login(this.model, this.userType);


          this.errorMessage = data.Message;    
          
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    

      //this.LoginService.login(this.model, this.userType);
      
  };    
  

 }     