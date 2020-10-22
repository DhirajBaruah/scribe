import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;
  loggedIn: boolean;
  uid:string="";

  constructor() { 
    this.user=firebase.auth().currentUser;
    if(this.user) {
      this.loggedIn=true;
      console.log(`menuconstr1 ${this.user}`)
    }else{
      this.loggedIn=false;
    }
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.loggedIn=true;
        this.uid=user.uid;
        
        console.log(`menuconstr2 ${this.uid}`)
      }else{
        this.loggedIn=false;
      }
    })
  }

  ngOnInit(): void{

  }

  logout(){
    firebase.auth().signOut();
  }

}
