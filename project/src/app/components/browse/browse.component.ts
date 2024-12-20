import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../types/artisan.interface';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  artisans:Artisan[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit() {
    this.artisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }
}