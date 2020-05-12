import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VisitorComponent } from './visitor.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [HomeScreenComponent, NavbarComponent, VisitorComponent, FooterComponent, ProductCardComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
