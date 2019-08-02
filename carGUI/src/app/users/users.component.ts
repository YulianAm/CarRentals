import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { TrustedUrlString } from '@angular/core/src/sanitization/bypass';
import { _sanitizeUrl } from '@angular/core/src/sanitization/url_sanitizer';
import { stringify } from 'querystring';
import { NavService } from '../services/nav.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] ;
  

  
  
   

  constructor(private usersService: UsersService, private sanitizer: DomSanitizer, public nav: NavService) {

   }

  ngOnInit() {
    this.Get();
    this.nav.show();
 


     
  }



  Get(): void {
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
    
  }
  
  Delete(user: User): void {
    if(confirm('you sure you want to delete  ' + user.firstName + ' ' + user.lastName + '?')) {  
      this.users = this.users.filter(h => h !== user);
      this.usersService.deleteUser(user).subscribe();}


  

    
  }
  
  Edit(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.usersService.updateUser(user).subscribe();
  }

  injectForm(user: User): void {
    this.usersService.formData = user;


  }
 /*sanitizeURL(users: User[]): void {
   
  for (let i =0; i <10; i++) {
    this.users[i].image = _sanitizeUrl(stringify(users[i].image))


  }
 

}*/
}