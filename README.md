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
