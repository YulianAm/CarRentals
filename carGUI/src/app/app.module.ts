import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './cars/cars.component';
import { ToastrModule } from 'ngx-toastr';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgPipesModule} from 'ngx-pipes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CarRentFormComponent } from './car-rent-form/car-rent-form.component';
import { SearchHomePageComponent } from './search-home-page/search-home-page.component';
import { CarsService } from './services/car.service';
import { searchFormStage1 } from './models/searchFormStage1';
import { SearchFormDataService } from './services/search-form-data.service';
import { UniquePipe } from './pipes/unique.pipe';
import { FinalRentFormComponent } from './final-rent-form/final-rent-form.component';
import { EditCarComponent } from './cars/edit-car.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './orders/create-order.component';
import { CarTypesComponent } from './carTypes/car-types.component';
import { CreateCarTypeComponent } from './carTypes/create-car-type.component';



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
    HomeComponent,
    CarRentFormComponent,
    SearchHomePageComponent,
    UniquePipe,
    FinalRentFormComponent,
    EditCarComponent,
    OrdersComponent,
    CreateOrderComponent,
    CarTypesComponent,
    CreateCarTypeComponent
    

    
    
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
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(
    {  
      positionClass:'top-left',  
      closeButton: true,  
        
    })  ,
    NgPipesModule
    
    
    
    
  ],
  providers: [ CarsService, SearchFormDataService, UserAuthentication,{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  } ,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
  
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
