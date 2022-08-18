import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  submitted: any=false;
  user: any=[];
  filterdata: any;

  constructor(private fb:FormBuilder,private router: Router, private toast:ToastrService) { }

  ngOnInit(): void {
   this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password :['',Validators.required]
   })

  }
   get f():{[key:string]:AbstractControl} { return this.loginForm.controls;
   };


  onSubmit(){
    console.log(this.f ,"f")
    this.submitted = true
     this.user= JSON.parse(localStorage.getItem('form-data') || '{}');
     console.log(this.user,'usersss')
     console.log(this.loginForm.get('email')?.value,'emailrsss')

     this.filterdata=this.user.find((dta:any)=>dta.email == this.loginForm.get('email')?.value)
     console.log( this.filterdata)
     if( this.filterdata){
      this.toast.success('successfully loged')
      this.router.navigate(['/home'])
    }
    else{
      this.toast.error(' Invalid user !')
    }


  }


}

