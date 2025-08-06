import { Component, signal } from '@angular/core';
import { Login } from './pages/externo/login/login';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Login, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('doNow');
}
