import { Component } from '@angular/core';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AcceuilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
