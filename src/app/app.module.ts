import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {  StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { cartReducer } from 'src/store/reducers/cart-reducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CustomerComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({cartReducer})
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
