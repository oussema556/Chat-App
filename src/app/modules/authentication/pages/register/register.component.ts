import { Component } from '@angular/core';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fieldTextType:boolean = false
  toggleConfirm:boolean= false
  registerForm:FormGroup

  toggleFieldTextType(){
    this.fieldTextType=!this.fieldTextType
  }
  toggleConfirmField(){
    this.toggleConfirm=!this.toggleConfirm
  }

  
    
  
  constructor(private auth: AuthService, private router: Router, private formBuilder:FormBuilder){
    this.registerForm= this.formBuilder.group({
   
      email : new FormControl('', [Validators.required, Validators.email]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      phone_number: new FormControl(null,
        [
          Validators.required,
          Validators.pattern('^\\\\s*(?:\\\\+?(\\\\d{1,3}))?[-. (]*(\\\\d{3})[-. )]*(\\\\d{3})[-. ]*(\\\\d{4})(?: *x(\\\\d+))?\\\\s*$'),
          Validators.maxLength(8),
          Validators.minLength(8)
        ]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('',[Validators.required]),
    },
    {
      validators: this.MustMatch('password', 'confirm')
    }
    );}
  

  
  get email() {
    return this.registerForm.get('email')?.value;
  }
  get first_name() {
    return this.registerForm.get('first_name')?.value
  }
  get last_name() {
    return this.registerForm.get('last_name')?.value
  }

  get password() {
    return this.registerForm.get('password')?.value
  }
  get confirm() {
    return this.registerForm.get('confirm')?.value
  }
  get phone_number() {
    return this.registerForm.get('phone_number')?.value
  }

  registerUser() {
    let user: {first_name: any, last_name: any, email: any, password: any, confirm: any, phone_number:any }= {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      confirm: this.confirm,
      phone_number: this.phone_number
    }
    this.auth.register(user)
      .subscribe(
        (res)=> {
          if(res) {
            console.log(res)
          }
        },
        (error: Error)=> {
          console.log(error)
        })
  }

  MustMatch(password:any, confirm:any) {
    return (formGroup: FormGroup)=>{
      const passwordControl = formGroup.controls[password]
      const confirmPasswordControl = formGroup.controls[confirm]

      if(confirm.errors && !confirm.errors['MustMatch']){
        return;
      }
      if(passwordControl.value!==confirmPasswordControl.value){
        confirmPasswordControl.setErrors({ MustMatch: true })
      }else{
        confirmPasswordControl.setErrors(null)

      }
    }

  }

}
