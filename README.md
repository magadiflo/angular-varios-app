# AngularVariosApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

# [10 Best Angular DataTables With Pagination, Sorting And Filter](https://www.ngdevelop.tech/best-angular-tables/)

Librerías para poder generar paginación, aquí las que me gustaron

- PrimeNg Table
- Hay más...

# [Form Control y Control Value Accesor en Angular](https://www.youtube.com/watch?v=UabeWOGqtvM&list=PLy09ETjgu8VqKGRs1UFq3ZiFbY0zzhdLr)
Tutorial que muestra **cómo usar un componente personalizado como control de formulario** para usarlo con Formularios Reactivos

# [Internacionalización usando Transloco y Angular](https://www.youtube.com/watch?v=p_M-MMBXOxk&list=PLy09ETjgu8VqKGRs1UFq3ZiFbY0zzhdLr&index=6)
Tutorial que muestra cómo realizar la traducción de nuestra aplicación de inglés a español y viceversa con transloco y Angular.

- **Instalación de Transloco**
Como estamos usando la versión 14 de Angular (transloco solo tiene soporte hasta la versión 13), necesitamos agregarle un flat al comando de 
instalación de transloco --project=NOMBRE_DE_MI_PROYECTO_ANGULAR
```
ng add @ngneat/transloco --project=angular-varios-app
```

En el proceso de instalación de las dependencias preguntará:
- The package @ngneat/transloco@4.2.1 will be installed and executed. Would you like to proceed? **Yes**
- Which languages do you need?(en, es) **en, es**
- Are you working with server side rendering? **Yes**
Finalmente se generarán los siguientes archivos y actualizaciones:
```
CREATE transloco.config.js (106 bytes)
CREATE src/assets/i18n/en.json (3 bytes)
CREATE src/assets/i18n/es.json (3 bytes)
CREATE src/app/transloco-root.module.ts (1081 bytes)
UPDATE src/environments/environment.prod.ts (87 bytes)
UPDATE src/environments/environment.ts (694 bytes)
UPDATE src/app/app.module.ts (745 bytes)
```

---

# Directivas

---

## Directivas de atributo

### Directiva: imagenRota

Crearemos la directiva **imagenRota** para mostrar una imagen por defecto cuando la imagen no se encuentre: 

````typescript
@Directive({
  selector: '[imagenRota]'
})
export class ImagenRotaDirective {

  constructor(private _el: ElementRef<HTMLImageElement>) { }

  @HostListener('error') loadImageByDefault() {
    this._el.nativeElement.src = 'assets/no-imagen.png';
  }

}
````

Agregamos nuestra directiva como **atributo** de la etiqueta ``<img>``: 

````html
<img src="https://www.web-no-existe.com/mi-imagen.png" imagenRota alt="Imagen por defecto" class="w-100">
````

El funcionamiento, como observamos la url de la imagen es una url inválida, la imágen no va a existir, por lo tanto
en consola observaremos el siguiente error: 

````bash
GET https://www.web-no-existe.com/mi-imagen.png net::ERR_NAME_NOT_RESOLVED
````
Entonces, es allí donde nuestra directiva de atributo **imagenRota** entra en funcionamiento. 

El decorador **@HostListener()**:

> Nos permite capturar eventos que hayan sucedido sobre aquel elemento al que le estemos aplicando la directiva. En nuestro caso, los eventos que sucedan a aquellos elementos html que tengan nuestra directiva **imagenRota**, para ser más exactos, el evento **error** que ocurra sobre los elementos que tengan anotado nuestra directiva **imagenRota**.

Por lo canto, cuando ocurra el evento **error**, el **@HostListener()** lo va a detectar y ejecutar el método **loadImageByDefault()** donde estamos asignandole una imagen por defecto.

### Directiva: Highlight

Resaltaremos el texto contenido dentro de un elemento html que contenga la directiva **highlight**.

````typescript
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(
    private _el: ElementRef<HTMLElement>,
    private _render: Renderer2) {
    console.log(this._el);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this._highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._highlight('');
  }

  private _highlight(color: string): void {
    //* this._el.nativeElement.style.backgroundColor = color;
    this._render.setStyle(this._el.nativeElement, 'background-color', color);
  }

}
````
- **ElementRef**, es inyectado por Angular. Es el elemento html sobre el cuál es aplicado esta directiva.
- **Renderer2**, permite **desplegar estilos independientemente de la plataforma donde se visualice.**
  Una aplicación Angular podemos encontrarlos en muchos sitios: navegador móvil, aplicación escritorio, etc..
  Para evadir un poco lo que serían las herramientas propias del navegador y poder aplicar los cambios
  o estilos independientemente de la plataforma con la que estemos trabajando, tenemos una herramienta
  RENDERED que nos permite hacer lo mismo independientemente de la plataforma.
- **@HostListener('')**, nos permite capturar eventos que hayan sucedido sobre aquel elemento al que le estemos aplicando la     
  directiva. En nuestro caso, **los eventos que sucedan a aquellos elementos html que tengan nuestra directiva appHighlight.**

Asignando estilos con Renderer2:

````typescript
this._el.nativeElement.style.backgroundColor = 'yellow';                      //(1) <--
this._renderer.setStyle(this._el.nativeElement, 'background-color', 'yellow');//(2) <--
````

Si observamos el código anterior, tanto **el (1) y el (2) hacen lo mismo**, son formas de agregar estilos css al elemento html que tenga anotado la directiva. La diferencia es que **con el Renderer2, se aplica los estilos independientemente de la plataforma**, mientras que **solo con el ElementRef, sería usando un navegador.**

### Directiva: NumbersOnly

Crearemos una directiva que solo permitirá el ingreso de números:

````typescript
@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private _el: ElementRef<HTMLInputElement>) { }

  @HostListener('input', ['$event']) onChangeInput(event: Event): void {
    const charactersThatAreNotNumbers = /[^0-9]*/g
    const initValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initValue.replace(charactersThatAreNotNumbers, '');
    if (initValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
````
- El 'input' dentro del @HostListener(), es el evento que queremos escuchar del elemento que tiene anotado nuestra directiva numbersOnly, en nuestro caso el elemento que tiene anotado dicha directiva es el ``<input type="text" numbersOnly>``. El evento **input** indica cuando el valor de entrada de un elemento cambia.
- ['$event'], dentro de los [] pasamos como argumento el $event el cual es usado como parámetro en la firma del método, eso significa que, si no pasamos el ['$event'] como segundo argumento al @HostListener, cuando imprimamos la variable event
este mostrará un undefined. Por lo tanto, es importante pasar ese $event si es que queremos usar datos del evento.
- **const charactersThatAreNotNumbers = /[^0-9]*/g;**, esto es una expresión regular que coincide con cualquier caracter que no sea un número del 0 al 9. Esto se utiliza para **eliminar todos los caracteres que no sean números del valor de entrada.**
- **if (initValue !== this._el.nativeElement.value) { event.stopPropagation(); }**, esto compara el valor original con el nuevo valor después de haber eliminado los caracteres no numéricos. Si hubo un cambio en el valor, se detiene la propagación del evento, lo que significa que no se propagará más allá de este punto.

Explicando a detalle la expresión regular **/[^0-9]*/g**:

- /, delimitador inicial de la expresión regular.
- [^0-9]*, aquí se descompone en más detalle:
  - [^0-9], el carácter ^ al comienzo de un conjunto de caracteres indica "negación", lo que significa que coincidirá con cualquier carácter que no esté en el rango especificado.
  - 0-9, este rango incluye todos los dígitos del 0 al 9.
  - *, este cuantificador indica que el conjunto anterior (cualquier carácter que no sea un dígito) puede aparecer cero o más veces.
- /, delimitador final de la expresión regular.
- g, el modificador global, que indica que la búsqueda debe ser global y no detenerse después de encontrar la primera coincidencia en una cadena.

## Directivas estructurales

### Directiva: customIf

Crearemos la directiva estructural **customIf** para mostrar u ocultar un elemento, similar al *ngIf:

````typescript
@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  constructor(
    private _templateRef: TemplateRef<HTMLElement>,
    private _viewContainer: ViewContainerRef) { }

  @Input() set customIf(condition: boolean) {
    console.log('customIf: ', condition);
    if (condition) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
````

**Como este es una directiva estructural** ya que estamos inyectando, tanto el **TemplateRef como el ViewContainerRef**, es necesario que el elemento al que anotemos con esta directiva lleve el asterisco (*), caso contrario mostrará un error en consola: ``Error: NG0201: No provider for TemplateRef found``. Para ver exactamente cómo usarlo, veamos el ejemplo:

```html
<div *customIf="showElement" class="alert alert-success mt-3">Mostrando mensaje</div>
```
 