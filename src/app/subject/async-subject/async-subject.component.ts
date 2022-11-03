import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from "rxjs";

/***
 * * AsyncSubject
 * * **************
 * * AsyncSubject SOLO EMITIRÁ el último valor del Observable cuando éste 
 * * haya finalizado, es decir, cuando se haya ejecutado el método complete().
 * 
 * * El AsyncSubject es una variante donde únicamente se envía el último valor 
 * * de la ejecución Observable a sus Observadores, y esto ocurre solo cuando 
 * * la ejecución se ha completado.
 * 
 * * Emite su último valor al finalizar.
 */

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styles: [
  ]
})
export class AsyncSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ejemplo1();
  }

  ejemplo1() {
    const subject = new AsyncSubject<number>();

    subject.subscribe(console.log);

    subject.next(123); //* A pesar de que establece el valor 123, aún no lo emitirá

    subject.subscribe(console.log);

    subject.next(456); //* A pesar de que establece el valor 456, aún no lo emitirá

    //* ¡AHORA SÍ!, como se va a finalizar con el ...complete()...se emitirá el último valor establecido (456)
    //* Vemos que tenemos 2 subcriptores, ambos mostrarán el último valor del observable: 456, 456
    subject.complete();
  }

}
