import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  title = 'Concesionario de Carros';
  subtitle = '¿Cuál es el mejor para tí?';
  }