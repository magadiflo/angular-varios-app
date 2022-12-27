import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  //* Para obtener el idioma activo usaremos la función ...getActiveLang();
  lang = this._translocoService.getActiveLang();

  constructor(private _translocoService: TranslocoService) { }

  ngOnInit(): void {
    //* Si queremos saber cada vez que se cambia un idioma debemos de subscribirnos al Observable 'langChanges$""
    this._translocoService.langChanges$
      .subscribe(response => this.lang = response);
  }

  translate(language: string): void {
    console.log(language);
  }

}
