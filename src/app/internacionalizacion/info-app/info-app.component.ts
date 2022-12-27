import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-info-app',
  templateUrl: './info-app.component.html',
  styleUrls: ['./info-app.component.css'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'info-app' } //* Le decimos que cuando se descargue este componente o módulo use el ámbito 'info-app' que es el directorio que creamos en /assets/i18n
    }
  ]
})
export class InfoAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
