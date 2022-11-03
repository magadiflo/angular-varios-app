import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

/**
 * * BehaviourSubject, emite el último valor a todas las nuevas subscripciones. 
 * * - Requiere un valor por defecto.
 * * - Devuelve el último valor, inmediatamente hay una subscripción.
 * * - Puedes recuperar el último valor emitido con el getValue() 
 */

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behavior-subject.component.html',
  styles: [
  ]
})
export class BehaviorSubjectComponent implements OnInit {

  //* Ejemplo 1
  private sourceSubject = new Subject<string>();

  //* Ejemplo 2
  private sourceBehavior = new BehaviorSubject<string>('default value!!');

  //* Ejemplo 3
  private behaviorSubject = new BehaviorSubject<Date>(new Date());
  obs$ = this.behaviorSubject.asObservable();

  constructor() { }

  ngOnInit(): void {
    //this.subject();
    //this.behavior();
    //this.behavior2();
    this.ejemplo4();
  }

  //* Ejemplo 3
  behavior2(): void {
    setInterval(() => {
      this.behaviorSubject.next(new Date());
    }, 1000);
  }

  //* Ejemplo 2
  behavior(): void {
    this.sourceBehavior.next('Behavior -> next 1');
    this.sourceBehavior.next('Behavior -> next 2');

    //* Obtiene ÚNICAMENTE el último valor (Behavior -> next 2)
    this.sourceBehavior.subscribe({
      next: resp => console.log(resp)
    });

    console.log('Otra forma de obtener el último valor: ' + this.sourceBehavior.getValue());
  }


  //* Ejemplo 1
  subject(): void {
    //* Esto no se verá porque aún no se hace la subscripción.
    //* Esta subscripción, como se ve, viene después
    this.sourceSubject.next("subject -> No se verá 1");
    this.sourceSubject.next("subject -> No se verá 2");
    this.sourceSubject.next("subject -> No se verá 2");
    this.sourceSubject.next("subject -> No se verá 3");
    this.sourceSubject.next("subject -> No se verá 4");

    this.sourceSubject.subscribe({
      next: resp => console.log(resp),
    });

    //* Este sí se verá, porque ocurre después de cuando se ha subscrito al subject
    this.sourceSubject.next("subject -> Sí se verá");
  }

  //* Ejemplo 4
  ejemplo4() {
    const subject = new BehaviorSubject<number>(123);

    //* Dos nuevos subscriptores tendrán el valor inicial => 123
    subject.subscribe(console.log);
    subject.subscribe(console.log);

    //* Los dos subscriptores tendrán un nuevo valor: 456
    subject.next(456);

    //* El nuevo subscriptor obtendr+a el nuevo valor: 456
    subject.subscribe(console.log);

    //* Los tres subscriptores obtendrán un nuevo valor
    subject.next(789);

    //* output: 123, 123, 456, 456, 456, 789, 789, 789
  }

}
