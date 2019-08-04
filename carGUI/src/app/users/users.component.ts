import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { TrustedUrlString } from '@angular/core/src/sanitization/bypass';
import { _sanitizeUrl } from '@angular/core/src/sanitization/url_sanitizer';
import { stringify } from 'querystring';
import { NavService } from '../services/nav.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  editable: boolean;
  user: User;





  constructor(private usersService: UsersService,
    private sanitizer: DomSanitizer,
    public nav: NavService,
    private toastr: ToastrService) {

  }

  ngOnInit() {
    this.Get();
    this.nav.show();




  }

  Edit2(user: User): void {
    document.documentElement.scrollTop = 0;
    this.editable = true;
    // this.usersService.updateUser = user;
    this.user = user;
  }


  SendToEditService(user: User) {
    //this.car.branchId = this.branch.id;
    //console.log(branch);
    console.log(user);
 

    // this.usersService.updateUser(user).subscribe();
    this.usersService.updateUser(user).subscribe(res=> {
      this.toastr.success('Updated User successfully', 'User Registered');
    });

    console.log("subitted to server");
    alert("submitted succefully");

  }

  Get(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);

  }

  noEdit() {
    this.editable = false;
  }

  Delete(user: User): void {
    if (confirm('you sure you want to delete  ' + user.firstName + ' ' + user.lastName + '?')) {
      this.users = this.users.filter(h => h !== user);
      this.usersService.deleteUser(user).subscribe();
    }





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