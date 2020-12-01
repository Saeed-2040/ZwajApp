import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any={};
  constructor(private authServise : AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authServise.login(this.model).subscribe(
      next=>{console.log('تم الدخول بنجاح')},
      error=>{console.log('فشل في الدخول')}
      
    )
  }
  loggedIn(){
    const token=localStorage.getItem('token');
    return !! token
  }
  loggedOut(){
    localStorage.removeItem('token');
    console.log('تم الخروج')
  }

}
