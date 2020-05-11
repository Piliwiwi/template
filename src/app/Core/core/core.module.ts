import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductProviderService } from './providers/product-provider/product-provider.service';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductProviderService
  ]
})
export class CoreModule { }
