import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nombre: string = 'Martín';

  constructor() {
    setInterval(() => {
      this.nombre = 'Gaspar';
    }, 3000);
  }

  ngOnInit(): void {
  }

  sumar(n1: number, n2: number): number {
    return n1 + n2;
  }

}
