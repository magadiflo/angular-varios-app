import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * * Subject, es un tipo especial de observable, que permite que los valores se  multitransmitan a muchos observadores. 
 * * Mientras que los Observables simples son unicast (cada Observador suscrito posee una ejecución independiente del Observable), 
 * * los Sujetos son multicast.
 * *
 * * Nos permite generar múltiples subscripciones.
 * * Un tipo especial de Observable que comparte una única ruta de ejecución entre observadores.
 * * 
 * * Una característica de los Subjects que les da una gran versatilidad y es que los 
 * * Subjects de RxJs son Observables y Observers al mismo tiempo por lo que nos podemos 
 * * subscribir a un Subject como a cualquier otro Observable, pero además disponen de 
 * * los métodos next(), error() y complete() que tienen el Observer para emitir sus valores.
 * *
 * * RxJs dispone de diferentes tipos de Subjects que vienen a cubrir distintas 
 * * necesidades como por ejemplo "recordar" el último valor emitido por el observable 
 * * cuando se establece una nueva subscripción: 
 * *    Subject: Sin valor inicial ni comportamiento de repetición.
 * *    BehaviorSubject: Requiere un valor inicial y emite su valor actual (último elemento emitido) a los nuevos subscriptores.
 * *    ReplaySubject: Emite el número especificado de los últimos valores emitidos (una repetición) para los nuevos suscriptores.
 * *    AsyncSubject: Emite el valor más reciente para los observadores al finalizar.
 */

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new Subject<number>();

    subject.subscribe({
      next: value => console.log(`Observer A: ${value}`)
    });

    subject.subscribe({
      next: value => console.log(`Observer B: ${value}`)
    });

    subject.next(1);
    subject.next(2);
  }

}
