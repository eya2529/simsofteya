import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { BackgroundEffects } from './components/background-effects/background-effects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BackgroundEffects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
