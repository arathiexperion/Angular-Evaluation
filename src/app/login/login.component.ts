import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../shared/product';
import {AuthService} from'../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errors='';
  isSubmitted=false;
  loginUser: any = new Product();

  constructor(private formBuilder : FormBuilder,
    private router:Router,
    private authservice:AuthService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({ 
      username:['',[Validators.required]], userpassword:['',[Validators.required]] } );

  }
  get formControls() {
    return this.loginForm.controls;

}
loginCredentials() {
  this.isSubmitted=true;
  alert("Submitted Login");
  if(this.loginForm.valid)
  {
   
    this.authservice.loginVerify(this.loginForm.value).subscribe(
      data=>{
        console.log(data);
        this.loginUser=data;
        //username,roleid and token
        alert(this.loginUser.token);
        sessionStorage.setItem("JwtTOKEN",this.loginUser.token);
        if(this.loginUser.roleId==1)
        {
          console.log("ADMIN");
         
          localStorage.setItem("username",this.loginUser.username);
          localStorage.setItem("AccessRole",this.loginUser.roleId.toString());
          sessionStorage.setItem("username",this.loginUser.username);
          this.router.navigateByUrl('/admin');

        }
        else if(this.loginUser.roleId==2)
        {
          console.log("manager");
          
          localStorage.setItem("username",this.loginUser.username);
          localStorage.setItem("AccessRole",this.loginUser.roleId.toString());
          sessionStorage.setItem("username",this.loginUser.username);
          this.router.navigateByUrl('/manager');

        }
        else{
          this.errors="sorry";
        }
      },
      error=>{
        this.errors="try again";
      }
    )

  }
}

}
