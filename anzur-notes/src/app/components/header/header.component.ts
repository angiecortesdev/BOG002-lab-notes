import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent {
  public user$: Observable<any> = this.authSvc.afAuth.user
  constructor(private authSvc:AuthService,  private router: Router) { }


  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/register'])
    }catch(error){
      console.log(error)
    }
  }
}
