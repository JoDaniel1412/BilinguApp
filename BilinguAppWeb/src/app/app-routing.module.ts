import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeViewComponent} from './home-view/home-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'admin', component: AdminViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
