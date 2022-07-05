import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';

const routes: Routes = [
  {path:'', component:HeadlineComponent} //top headline & home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
