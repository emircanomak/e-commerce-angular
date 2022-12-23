import { LoginGuard } from './../../guards/login.guard';
import { IProductModel } from './../../models/productModel';
import { HomeService } from './../../services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 product:IProductModel[]=[]
 constructor(private homeService:HomeService){}

 ngOnInit(){
  this.getProducts()
 }

 getProducts(){

  this.homeService.getProducts().subscribe(data=> this.product=data)
 }

 cardClick(){
  alert("Lütfen Giriş Yapınız !")
 }
 logOut(){
  localStorage.clear();
  alert("Çıkış Yapıldı")
 }

}
