// src/app/interfaces/artisan.interface.ts

import { Product } from './product.interface';

export interface Artisan {
    id: number;
    name: string;
    bio: string;
    profileImageUrl: string;
    location: string;
    products: Product[];
    rating?: number;
}
