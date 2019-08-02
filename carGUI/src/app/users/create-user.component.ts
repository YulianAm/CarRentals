import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../models/user';
import { NavService } from '../services/nav.service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  users: User[];
  selectedFile = null;

  user: User = {
    id: null,
    firstName: null,
    lastName: null,
    countryId: null,
    userName: null,
    dateOfBirth: null,
    gender: null,
    email: null,
    userPassword: null,
    isAdmin: null,
    image: null
  }
  
  
  

  

  constructor(private router:Router, private usersService: UsersService, public nav: NavService) { }

  ngOnInit() {
    this.Get();
    this.nav.show();
    this.user = this.usersService.formData;
    console.log(this.nav.SignUp);
  }

 

  SignUpClick() { console.log('SIGN UP CLICK'); this.router.navigate(['/login']);  

  }
  Create(user: User): void {




      console.log('created user:' + user);
      this.usersService.CreateUser(this.user).subscribe();

  }

  Get(): void {
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
  }
 
  
saveUser(userForm: NgForm): void {

console.log(userForm);

}

onFileSelected(event) {
 this.selectedFile = event.target.file[0];
}

onUpload() {}


}
