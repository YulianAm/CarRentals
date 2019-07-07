
import { Injectable } from "@angular/core";
import { credentials } from '../models/credentials';
import { UserTypeEnum } from '../models/userTypeEnum';

@Injectable()
export class UserAuthentication {

  
  GetBase64(): any {
    var user = this.getCurrentUser();
    return window.btoa(user.userName + ":" + user.userPassword);
  }

    static ManagerGuard: any;


  getCurrentUser(): credentials {
    
    var user = localStorage["user"];
    console.log("getCurrentUser:" + user    );


    if (user) {
      var userData: credentials = JSON.parse(user);
    }

    return userData;
  }

  get UserType(): UserTypeEnum {
    let user: credentials = this.getCurrentUser();
    if (user) {
      return user.userType;
    }
    return UserTypeEnum.Unknown;
  }

  login(user: credentials) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem("user");
  }

}
