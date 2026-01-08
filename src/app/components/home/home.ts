import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Features } from '../features/features';
import { Products } from '../products/products';
import { Partners } from '../partners/partners';
import { Partenaires } from '../partenaires/partenaires';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Features, Products, Partners, Partenaires],
  templateUrl: './home.html',
})
export class Home {}
