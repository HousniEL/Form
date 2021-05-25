import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataUserComponent } from './Components/data-user/data-user.component';
import { InputUserComponent } from './Components/input-user/input-user.component';

const routes: Routes = [
  {
    path: '',
    component: InputUserComponent
  },
  {
    path: 'user/:uid',
    component: DataUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
