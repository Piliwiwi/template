import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const PRODUCTS: Product[] = [
  { id: 1, name: 'iphone 10', stock: 3, price: 250000, coverImageUrl: 'https://i.linio.com/p/eec68759c37ef8065a0366b6978ad56f-zoom.webp' },
  { id: 2, name: 'galaxy z', stock: 0, price: 1280000, coverImageUrl: 'https://clubsmart.vteximg.com.br/arquivos/ids/201033/SM-F700FZPDCHO_01.jpg?v=637241962914270000'},
];

@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {

  // En angular las peticiones http retornan observables por lo que crearemos un observable con 
  // la constante de productos que esta definida mas arriba para simular esta acción.

  // Esto es solo para crear el observable que simulara la respuesta.
  private productSubject: BehaviorSubject<Product[]>; 

  constructor(
    private httpClient: HttpClient
  ) { 
    this.productSubject = new BehaviorSubject(PRODUCTS); 
  }

  // Acá se simulara una petición a un servidor retornando un observable despues de 3,5 segundos.
  public getProductsFake(): Observable<Product[]>{   
    setTimeout(() => {}, 3500);
    return this.productSubject.asObservable();
  }

  // Asi seria una petición http esto retorna un observable.
  public getProducts(): Observable<Product[]>{   
    return this.httpClient.get<Product[]>('/products');
  }
}
