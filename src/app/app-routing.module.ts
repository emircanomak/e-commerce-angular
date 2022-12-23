import { CustomerComponent } from './pages/customer/customer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"home-login",component:LoginComponent},
  {path:"home-register",component:RegisterComponent},

  //child of Home
  {path:"",component:HomeComponent},

  // end child of Home

  //child of customer
  {path:"customer",component:CustomerComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
