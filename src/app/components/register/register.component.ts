import { RegisterService } from './../../services/register.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup 
  constructor(private registerService:RegisterService, private formBuilder:FormBuilder){}

  ngOnInit(){
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email:["",Validators.required],
      name:["",Validators.required],
      lastName:["", Validators.required],
      password:["", Validators.required],
      token:["dshajkfhjasjhfksajk"],
    })
    
  }

  add(){
    this.registerService.add(this.registerForm.value).subscribe(data =>{

    })
    alert("Kayit Olundu")
  }
}
