import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUpdateUsersComponent } from './pages/add-update-users/add-update-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/add', component: AddUpdateUsersComponent },
  { path: 'users/update/:cpf', component: AddUpdateUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
