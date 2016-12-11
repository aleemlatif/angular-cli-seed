import { Component, OnInit } from '@angular/core';
import {toast} from "angular2-materialize";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  say_hello(){
    toast("Hello World!")
  }

  ngOnInit() {
  }

}
