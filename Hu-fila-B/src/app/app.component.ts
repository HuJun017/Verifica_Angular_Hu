import { Component } from '@angular/core';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [SecondComponent, ThirdComponent, FourthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hu-fila-B';
}
