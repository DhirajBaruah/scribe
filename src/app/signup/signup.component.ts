import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string="";
  error: any;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator:this.checkIfMatchingPassword("password", "confirmPassword")
    });
  }

  checkIfMatchingPassword(passwordKey:string,confirmPasswordKey:string){
    return (group: FormGroup)=>{
      let password= group.controls[passwordKey];
      let confirmPassword= group.controls[confirmPasswordKey];

      if(password.value==confirmPassword.value){
       
        return;
      }else{
        confirmPassword.setErrors({
          notEqualToPassword:true
        })
      }
    }
  }

  onSubmit(form) {
    let firstName: string = form.value.firstName;
    let lastName: string = form.value.lastName;
    let email: string = form.value.email;
    let password: string = form.value.password;

    this.authService
      .signup(firstName, lastName, email, password)
      .then(() => {
        this.message="You have successfully signed up. Please Login"
      })
      .catch((error) => {
        console.log(error);
        this.error=error;
      });
  }

  ngOnInit(): void {}
}
