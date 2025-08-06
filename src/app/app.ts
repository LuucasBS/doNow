import { Component, signal } from '@angular/core';
import { Layout } from './layout/layout';
import { RouterModule } from '@angular/router';
import { Login } from './pages/externo/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Login],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('doNow');
}
