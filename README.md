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