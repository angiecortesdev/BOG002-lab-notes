import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router,) { }

  ngOnInit(): void {
  }

  // async onLogin(){
  //   //console.log('Formulario:', this.registerForm.value)
  //   const { email, password } = this.loginForm.value;
  //   this.authSvc.login(email, password)
  // }


  async onLogin(){
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password)
      // if (user){
         console.log(user)
         this.router.navigate(['/list'])
      // }
    }
    catch(error){
     console.log(error)
    }
  }

}
