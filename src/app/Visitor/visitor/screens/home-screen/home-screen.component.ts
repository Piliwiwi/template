import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductProviderService } from '@core/providers/product-provider/product-provider.service';
import { Product } from '@models/product.model';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, OnDestroy {

  public products$: Observable<Product[]>;
  
  private productsSucription: Subscription; // Esto es para la forma no recomendada.

  constructor(
    private productProvider: ProductProviderService
  ) { 
    this.products$ = this.productProvider.getProductsFake();
  }
  
  ngOnInit(): void {
    // Esta es una forma de suscribirse al observable pero hay una forma mas eficiente 
    // que nos provee angular; el async pipe.   
    
    // this.productsSucription = this.products$.subscribe((products: Product[]) => console.log({...products}));
    
    // Hay que tener cuidado con esta forma de suscripcion por que se pueden generar 
    // multiples suscripciones lo que seria muy ineficiente. Para evitar esto hay que guardar
    // la suscripcion.
  }
  
  ngOnDestroy(): void {
    // Usando el metodo no recomendado es imprescindible terminar la suscripcion al destruirse el compoente.

    // this.productsSucription.unsubscribe();
  }

}
