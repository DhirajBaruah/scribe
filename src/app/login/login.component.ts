import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    myForm: FormGroup;
    constructor(public fb: FormBuilder, public authService: AuthService, public router: Router){
      this.myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
    }
    
    onSubmit(form){
      let email: string = form.value.email;
      let password: string = form.value.password;

      this.authService.login(email, password)
      .then((data) => {
        console.log(data);
        this.router.navigate([`/myblog`]);

      }).catch((error) => {
        console.log(error);
      })
    }


  ngOnInit(): void {
  }

}
