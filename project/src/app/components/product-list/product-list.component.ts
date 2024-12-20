import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../../services/artisan.service';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../types/product.interface';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  products:Product[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit() {
    this.artisanService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}