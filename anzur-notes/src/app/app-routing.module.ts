import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { RegisterComponent } from './components/register/register.component';
//import { RegisterModule } from './components/register/register.module';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)},
  { path: 'list', component: ListNotesComponent },
  { path: 'create', component: CreateNotesComponent },
  { path: 'edit/:id', component: CreateNotesComponent },
  { path: '**', redirectTo:'login' }
];
CreateNotesComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
