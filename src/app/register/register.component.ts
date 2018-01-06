import {Component, OnInit} from '@angular/core';
import {UserService} from "../provider/user.service";
import {user} from "../model/user";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide=true;

  constructor(private userService: UserService,private router: Router,private location: Location) {
  }

  user: user=new user();

  ngOnInit() {
  }

  Register() {
    this.userService.Register(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    }, err => {
      console.error(err);
    })
  }

  goBack(){
   this.location.back();
  }
}
