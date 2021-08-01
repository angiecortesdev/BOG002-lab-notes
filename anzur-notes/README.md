# AnZureNotes

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del Proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de Aprendizaje](#3-objetivos-de-aprendizaje)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Preámbulo

Hoy en día no es práctico imaginar el desarrollo web sin HTML, CSS y JavaScript,
esta última es el alma del desarrollo de aplicaciones web.
[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cual es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc.

Como desarrolladora front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del Proyecto

No existe día que no tomemos notas, siempre necesitamos apuntar alguna
dirección, número telefónico, notas de alguna reunión o guardar nuestras URLs
favoritas para poder consultarlas más tarde. Muchas veces para esta actividad
utilizamos libretas o agendas que terminan siendo olvidadas, o anotamos de
manera dispersa de tal manera que perdemos de vista la prioridad y el propósito
de la nota lo cual da como resultado una nota perdida.

Hoy en día las personas contamos con algún dispositivo móvil o
laptop y además nos estamos preocupando por implementar acciones para
salvar el medio ambiente, además el uso de notas en el trabajo remoto se vuelve
indispensable para aquello que debemos apuntar en el día con día, por ello a una
Laboratorian se le ocurre la idea de implementar una web app para tomar notas,
que nos permita crear, editar, eliminar y consultar las notas en cualquier
momento.

Ella está enamorada de la idea y quiere llevarla a cabo, pero no tiene el tiempo
necesario para empezar el proyecto, planea que sea un proyecto independiente a
su trabajo, por ello está buscando algunas colaboradoras dentro de la comunidad
de Laboratoria para implementar la idea, por lo cual te invitamos a colaborar.

### Archivos del proyecto

El proyecto deberá contener los siguientes archivos base de configuración,
aunque no serán los únicos archivos que quizás tendrás que crear.

* `README.md` es donde se encontrará la descripción del proyecto y elementos
  relevantes de tu proyecto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.eslintrc` este archivo contiene reglas para formatear el código además de
  ser una buena practica tener configurado un linter.

El objetivo principal de es aprender a construir una _interfaz web_ usando
el _framework_ elegido. Todos estos frameworks de Frontend atacan el mismo
problema: **cómo mantener la interfaz y el estado sincronizados**. Así que esta
experiencia espera familiarizarte con el concepto de _estado de pantalla_, y
cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por
ejemplo, cada vez que agregamos una _nota_, la interfaz debe actualizar la lista
de notas).

![Framewoks-img](https://miro.medium.com/max/700/1*paPkmhDhXifPg-64om52og.jpeg)

### HTML y CSS

* [X] HTML semántico
* [X] CSS flexbox
* [X] Maquetación

### Frontend Development

* [X] Componentes
* [ ] Manejo de estado

### Angular

* [X] [`Uso de Components | Templates`](https://angular.io/guide/architecture-components#introduction-to-components)
* [ ] [`Directivas estructurales (ngIf / ngFor)`](https://angular.io/guide/template-syntax#built-in-structural-directives)
* [ ] [`@Input | @Ouput`](https://angular.io/guide/component-interaction#component-interaction)
* [ ] [`Creación y uso de servicios`](https://angular.io/guide/architecture-services#providing-services)
* [X] [`Manejos de rutas`](https://angular.io/guide/router)
* [ ] [`Uso de Observables`](https://angular.io/guide/observables-in-angular)
* [ ] [`Uso de HttpClient`](https://angular.io/guide/http)
* [ ] [`Estilos de componentes (ngStyle / ngClass)`](https://angular.io/guide/template-syntax#built-in-directives)

### Firebase

* [ ] [`Firestore`](https://firebase.google.com/docs/firestore?hl=es)
* [ ] [`Firebase Auth`](https://firebase.google.com/docs/auth?hl=es)
* [ ] [`Firebase security rules`](https://firebase.google.com/docs/firestore/security/get-started)
* [ ] [`onSnapshot`](https://firebase.google.com/docs/firestore/query-data/listen)
* [ ] [`onAuthStateChanged`](https://firebase.google.com/docs/auth/web/manage-users?hl=es)

### Testing

* [ ] Testeo de tus interfaces
* [ ] Testeo de componentes
* [ ] Testeo asíncrono
* [ ] Mocking

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting.

#### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar un título a mi nota
* Agregar el contenido de mi nota.
* Ver todas mis notas.
* Ver la última modificación de la nota.
* Modificar las notas.
* Eliminar notas.
* Se ve y funciona bien en una _Tablet_

### AnZurNotes Sketch
