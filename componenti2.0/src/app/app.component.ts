import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirtComponentComponent } from './third-component/thirt-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondComponentComponent,ThirtComponentComponent]
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conponenti2.0';
  name ="primo";
}
