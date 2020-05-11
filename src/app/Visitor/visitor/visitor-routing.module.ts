import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';


const routes: Routes = [
  {
    path: '',
    component: VisitorComponent,
    children: [
      { path: 'home', component: HomeScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
