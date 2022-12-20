import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nombre: string = 'Martín';
  textoPlaceholder: string = 'Escriba algo aquí';
  deshabilitado: boolean = true;
  imgSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  texto: string = 'Esto es un video sobre event binding';

  constructor() {
    setInterval(() => {
      this.nombre = 'Gaspar';
      this.deshabilitado = false;
    }, 3000);
  }

  ngOnInit(): void {
  }

  sumar(n1: number, n2: number): number {
    return n1 + n2;
  }

  cambiarTexto(): void {
    this.texto = 'No se pierdan nuestro póximo video...';
  }

}
