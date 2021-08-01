import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'register', pathMatch: 'full'},
  { path: 'list', component: ListNotesComponent },
  { path: 'create', component: CreateNotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'edit/:id', component: CreateNotesComponent },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: '**', redirectTo:'register' }
];
CreateNotesComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
