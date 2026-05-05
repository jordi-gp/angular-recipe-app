import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer-component/footer-component';
import { MainPageComponent } from './components/main-page-component/main-page-component';
import { NavComponent } from './components/nav-component/nav-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavComponent,
    MainPageComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-recipes-app');
}
