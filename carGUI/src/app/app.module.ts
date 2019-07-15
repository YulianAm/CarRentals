import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './cars/cars.component';
import { CarsService } from './services/cars.service';
import { UsersComponent } from './users/users.component'; 
import { CreateUserComponent } from './users/create-user.component';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './filters/safe.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateCarComponent } from './cars/create-car.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EditUserComponent } from './users/edit-user.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UserAuthentication } from './services/user.authontication';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/interceptor';
import { ErrorInterceptor } from './services/error.interceptor';


// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    UsersComponent,
    CreateUserComponent,
    SafePipe,
    CreateCarComponent,
    ConfirmEqualValidatorDirective,
    EditUserComponent,
    LoginComponent,
    NavBarComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    //RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot(),
    Ng2SearchPipeModule,
    
    
  ],
  providers: [ CarsService, UserAuthentication, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  } ,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
