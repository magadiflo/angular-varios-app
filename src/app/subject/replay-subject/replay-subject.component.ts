import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from "rxjs";

/***
 * * REPLAY SUBJECT
 * * **************
 * * Replay Subject funciona de la misma forma que Behaviour Subject, pero así 
 * * como Behaviour Subject solo tiene la habilidad de recordar el último valor emitido, 
 * * con Replay Subject vamos a poder configurar el número de valores que queremos recordar 
 * * a las nuevas subscripciones.
 * 
 * * Repite o emite valores antiguos a nuevos subscriptores
 */

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styles: [
  ]
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ejemplo1();
  }

  //* Ejemplo 1
  ejemplo1() {
    const bufferSize: number = 3; //* Cantidad de valores que recordaremos y emitiremos a los ¡NUEVOS! subscriptores
    const subject = new ReplaySubject<number>(bufferSize);

    subject.next(1);
    subject.next(2);

    console.log('.....');
    subject.subscribe(console.log); //* 1, 2 (Sí es un nuevo subscriptor) 

    console.log('.....');
    subject.next(3); //* 3 (no es un nuevo subscriptor)
    subject.next(4); //* 4 (no es un nuevo subscriptor)

    console.log('.....');
    subject.subscribe(console.log);//* 2, 3, 4 (Sí es un nuevo subscriptor) 

    console.log('.....');
    subject.next(5);  //* 5, 5 (uno por cada subcriptor quienes ya no son subscriptores nuevos)

    //* 1, 2, 3, 4, 2, 3, 4, 5, 5
  }

}
