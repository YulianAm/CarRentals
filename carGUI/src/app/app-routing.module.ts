import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateCarComponent } from './cars/create-car.component';
import { CarComponent } from './cars/cars.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'createUser', component: CreateUserComponent },
  { path: 'cars', component: CarComponent},
  { path: 'createCar', component: CreateCarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
