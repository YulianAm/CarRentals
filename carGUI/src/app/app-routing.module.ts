import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateCarComponent } from './cars/create-car.component';
import { CarComponent } from './cars/cars.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { CarRentFormComponent } from './car-rent-form/car-rent-form.component';
import { SearchHomePageComponent } from './search-home-page/search-home-page.component';
import { FinalRentFormComponent } from './final-rent-form/final-rent-form.component';



const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'createUser', component: CreateUserComponent },
  { path: 'cars', component: CarComponent},
  { path: 'createCar', component: CreateCarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'rentCar', component:  CarRentFormComponent},
  { path: 'searchHome', component:  SearchHomePageComponent},
  { path: 'finalForm', component:  FinalRentFormComponent}
  
];
//


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
