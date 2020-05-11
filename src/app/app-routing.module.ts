import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'visitor/home', pathMatch: 'full'
  },
  { 
    path: 'visitor', 
    component: AppComponent,
    loadChildren: () => import('./Visitor/visitor/visitor.module')
      .then(module => module.VisitorModule)
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
