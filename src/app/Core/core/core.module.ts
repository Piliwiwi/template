import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductProviderService } from './providers/product-provider/product-provider.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductProviderService
  ]
})
export class CoreModule { }
