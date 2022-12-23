import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { ITokenModel } from 'src/app/models/tokenModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup
  tokenModel:ITokenModel
  constructor(private loginService:LoginService , private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(){
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
      
      this.loginService.login(this.loginForm.value).subscribe(data=>{
        this.tokenModel = data [0]
        localStorage.setItem("token",this.tokenModel.token)
        console.log(data);
        this.router.navigate([""])
        
      })


  }
}
