import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VisitorComponent } from './visitor.component';


@NgModule({
  declarations: [HomeScreenComponent, NavbarComponent, VisitorComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
