import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: any;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.artisanService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
    });
  }
}