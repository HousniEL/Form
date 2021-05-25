import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputUserComponent } from './Components/input-user/input-user.component';

const routes: Routes = [
  {
    path: '',
    component: InputUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
