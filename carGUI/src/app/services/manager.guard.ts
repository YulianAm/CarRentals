import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UserTypeEnum } from '../models/userTypeEnum';
import { UserAuthentication } from './user.authontication';


@Injectable()
export class WorkerGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    var user = this.authenticationService.getCurrentUser();

    if (user) {
      return user.userType == UserTypeEnum.Manager
        || user.userType == UserTypeEnum.Worker
    }
    this.router.navigateByUrl('login');
    return false;
    }

  constructor(
    private router:Router,
    private authenticationService: UserAuthentication) {


  }

}
