import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  user: any = {};

  constructor() {
    this.user = firebase.auth().currentUser;
  }

  ngOnInit(): void {
  }

}
