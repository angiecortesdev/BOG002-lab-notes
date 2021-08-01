import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    //console.log('Formulario:', this.registerForm.value)
    const { email, password } = this.registerForm.value;
    this.authSvc.register(email, password)
  }

  // async onRegister(){
  //   const {email, password}= this.registerForm.value;
  //   try{
  //     const user = await this.authSvc.register(email, password);
  //     if(user){
  //       //console.log(use)
  //       this.router.navigate(['/login'])
  //     }
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

}
