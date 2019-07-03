import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserAuthentication } from './user.authontication';


@Injectable()
export class Interceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //debugger
    console.log('intercepted request ... ');
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ` + this.userAuthentication.GetBase64()
      }
      
    }); console.log('Sending request with new header now ...');
    return next.handle(request);


    


  }

  constructor(private userAuthentication: UserAuthentication) {

  }
}



