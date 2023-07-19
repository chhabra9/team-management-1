import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MemberDetailsComponent} from './member-details/member-details.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './gaurd/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'member-details',
    component: MemberDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-member',
    component: AddMemberComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'update-member/:id',
    component:UpdateUserComponent,
    canActivate:[AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
