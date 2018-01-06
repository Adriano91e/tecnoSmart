import { Component, OnInit } from '@angular/core';
import {UserService} from "../provider/user.service";
import {user} from "../model/user";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:user=new user();

  constructor(private userService:UserService,private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  Register(){
   this.userService.Register(this.user);
   console.log(this.user);
   this.user=new user();
  }
  Login(){

 }
}
