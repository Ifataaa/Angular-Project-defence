import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../types/product.interface';
import { Artisan } from '../types/artisan.interface';

@Injectable({ providedIn: 'root' })
export class ArtisanService {
  
   private apiUrl = 'http://localhost:3000/artisans'; // Replace with your API URL

   constructor(private httpClient: HttpClient) {}

   getArtisans(): Observable<any[]> {
     return this.httpClient.get<Artisan[]>(this.apiUrl);
   }

   getProducts(): Observable<any[]> {
     return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
   }

   getProductById(id:number): Observable<any> {
     return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
   }
}
