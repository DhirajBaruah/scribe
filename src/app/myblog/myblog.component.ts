import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  user: any = {};
  posts: any[]=[];

  constructor() {
    this.user = firebase.auth().currentUser;
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(){
    //get the list of posts
    firebase.firestore().collection('posts')
    .orderBy('created','desc')
    .get().then((querySnapshot) => {
      console.log(querySnapshot.docs)
      this.posts=querySnapshot.docs;
    }).catch((err) => console.log(err))
  }

  onPostCreated(){
    // refresh the list of posts
    this.posts=[];
    this.getPosts();
  }

}
