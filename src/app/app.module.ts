import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MyblogComponent } from './myblog/myblog.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './create/create.component';

let firebaseConfig = {
    apiKey: "AIzaSyB1TzVDygD-ZeKRdFNAfOudX4x4HmVFm6k",
    authDomain: "scribe-e6062.firebaseapp.com",
    databaseURL: "https://scribe-e6062.firebaseio.com",
    projectId: "scribe-e6062",
    storageBucket: "scribe-e6062.appspot.com",
    messagingSenderId: "200037017511",
    appId: "1:200037017511:web:7aad2d6a0962422facf882",
    measurementId: "G-WKXFLW6JYC"
  };
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MyblogComponent,
    SignupComponent,
    HomeComponent,
    CreateComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,HttpClientModule, AngularEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
