# Documentación Observatorio de información TCU-652 
## Índice de comentarios del código
   * ### [Componentes](Observatorio/src/app/components)
      * #### [Código Darktoggle](Observatorio/src/app/components/darktoggle)
        * #### [Documentación Darktoggle CSS](Documentacion/App/Components/Darktoggle/darktoggle.css.md)
        * #### [Documentación Darktoggle HTML](Documentacion/App/Components/Darktoggle/darktoggle.html.md)
        * #### [Documentación Darktoggle TS](Documentacion/App/Components/Darktoggle/darktoggle.ts.md)
      * #### [Código Fab](Observatorio/src/app/components/fab)
        * #### [Documentación Fab CSS](Documentacion/App/Components/Fab/fab.css.md)
        * #### [Documentación Fab HTML](Documentacion/App/Components/Fab/fab.html.md)
        * #### [Documentación Fab TS](Documentacion/App/Components/Fab/fab.ts.md)
      * #### [Código Footer](Observatorio/src/app/components/footer)
        * #### [Documentación Footer CSS](Documentacion/App/Components/Footer/footer.css.md)
        * #### [Documentación Footer HTML](Documentacion/App/Components/Footer/footer.html.md)
        * #### [Documentación Footer TS](Documentacion/App/Components/Footer/footer.ts.md)
      * #### [Código Navbar](Observatorio/src/app/components/navbar)
        * #### [Documentación Navbar CSS](Documentacion/App/Components/Navbar/navbar.css.md)
        * #### [Documentación Navbar HTML](Documentacion/App/Components/Navbar/navbar.html.md)
        * #### [Documentación Navbar TS](Documentacion/App/Components/Navbar/navbar.ts.md)
      * #### [Código Post-Card](Observatorio/src/app/components/post-card)
        * #### [Documentación Post-Card CSS](Documentacion/App/Components/Post-card/post-card.css.md)
        * #### [Documentación Post-Card HTML](Documentacion/App/Components/Post-card/post-card.html.md)
        * #### [Documentación Post-Card TS](Documentacion/App/Components/Post-card/post-card.ts.md)
   * ### [Código Helpers](Observatorio/src/app/helpers)
      * #### [Documentación PostStyleConfig TS](Documentacion/App/Helpers/postStyleConfig.ts.md)
      * #### [Documentación URLparser TS](Documentacion/App/Helpers/URLparser.ts.md)
   * ### [Models](Observatorio/src/app/models)
      * #### [Documentación Activity TS](Documentacion/App/Models/activity.ts.md)
      * #### [Documentación CheckBoxData TS](Documentacion/App/Models/checkBoxData.ts.md)  
      * #### [Documentación Contact TS](Documentacion/App/Models/contact.ts.md) 
      * #### [Documentación Post TS](Documentacion/App/Models/post.ts.md)              
   * ### [Pages](Observatorio/src/app/pages)
      * #### [Código About](Observatorio/src/app/pages/about)
        * #### [Documentación About CSS](Documentacion/App/Pages/About/about.css.md)
        * #### [Documentación About HTML](Documentacion/App/Pages/About/about.html.md)
        * #### [Documentación About TS](Documentacion/App/Pages/About/about.ts.md)
      * #### [Código Blog](Observatorio/src/app/pages/blog)
        * #### [Documentación Blog CSS](Documentacion/App/Pages/Blog/blog.css.md)
        * #### [Documentación Blog HTML](Documentacion/App/Pages/Blog/blog.html.md)
        * #### [Documentación Blog TS](Documentacion/App/Pages/Blog/blog.ts.md)
      * #### [Código Contact](Observatorio/src/app/pages/contact)
        * #### [Documentación Contact CSS](Documentacion/App/Pages/Contact/contact.css.md)
        * #### [Documentación Contact HTML](Documentacion/App/Pages/Contact/contact.html.md)
        * #### [Documentación Contact TS](Documentacion/App/Pages/Contact/contact.ts.md)
      * #### [Código Home](Observatorio/src/app/pages/home)
        * #### [Documentación Home CSS](Documentacion/App/Pages/Home/home.css.md)
        * #### [Documentación Home HTML](Documentacion/App/Pages/Home/home.html.md)
        * #### [Documentación Home TS](Documentacion/App/Pages/Home/home.ts.md)
      * #### [Código Phonebook](Observatorio/src/app/pages/phonebook)
        * #### [Documentación Phonebook CSS](Documentacion/App/Pages/Phonebook/phonebook.css.md)
        * #### [Documentación Phonebook HTML](Documentacion/App/Pages/Phonebook/phonebook.html.md)
        * #### [Documentación Phonebook TS](Documentacion/App/Pages/Phonebook/phonebook.ts.md)
      * #### [Código Post](Observatorio/src/app/pages/post)
        * #### [Documentación Post CSS](Documentacion/App/Pages/Post/post.css.md)
        * #### [Documentación Post HTML](Documentacion/App/Pages/Post/post.html.md)
        * #### [Documentación Post TS](Documentacion/App/Pages/Post/post.ts.md)
   * ### [Services](Observatorio/src/app/services)
      * #### [Documentación Contact TS](Documentacion/App/Services/contact.ts.md)
      * #### [Documentación Event TS](Documentacion/App/Services/event.ts.md)
      * #### [Documentación Post TS](Documentacion/App/Services/post.ts.md)
      * #### [Documentación Theme TS](Documentacion/App/Services/theme.ts.md)                  
   * ### [Assets](Observatorio/src/assets)
   * ### [Environments](Observatorio/src/environments)

## Definiciones, acrónimos y abreviaturas

* **Inicio**: Página principal del sitio web.
* **Blog**: Página que recopila todas las publicaciones que se han realizado en el sitio web.
* **Nosotros**: Página que brinda un apartado informativo sobre los involucrados en el proyecto.
* **Directorio**: Apartado ubicado en la página inicio que brinda información de contacto con algunos entes afines al proyecto de TCU.
* **Publicaciones**: Elementnos informativos publicados en la página para ser consultados por los usuarios que visiten el sitio web.  
* **Eventos**: Registro de eventos informativos, estos poseen título, fecha, enlace y descripción.
* **Categorías**: Clasificaciones que posee la página para aplicar a las distintas publicaciones que se registren.
* **Contacto**: Información específica sobre algún ente a fin al proyecto.
* **UCR**: Universidad de Costa Rica

## Introducción

La función de este documento es explicar y detallar las tecnologías, diseños y funcionalidades de la página del Observatorio de Migración, este consiste en un sitio web en el que se realizan publicaciones informativas sobre temas relacionados con migración. Además, proporciona contactos, eventos y enlaces a material de ayuda para los usuarios de la página.

El documento está compuesto por una portada, introducción, miembros del equipo de desarrollo, descripciones del sistema, artefactos de la base de datos utilizados, decisiones técnicas y bibliografía

## Listado de miembros que han colaborado en el proyecto

* Eduardo 
* Jose David
* Jim
* Andrey
* Stephanie
* Adrián
* Eliza
* Juan

## Descripción general del sistema

Esta es una página web creada para el proyecto del TCU-652 de la Universidad de Costa Rica. Este proyecto viene a servir de herramienta para la publicación de información y contenido relacionada con las distintas temáticas del proyecto. La página presenta funcionalidades para agregar publicaciones, contactos y eventos mediante la administración del backend, su contenido es enfocado a la consulta e información, por lo que a traves de ella solo se pueden realizar consultas.

## Problema que resuelve

Falta de un lugar que brinde información centralizada sobre los procesos, actividades y recursos acerca de temas para las personas migrantes. 

## Interesados del proyecto y tipos de usuarios

* Personas que atraviesen un proceso migratorio.
* Investigadores y estudiantes interesados en los procesos migratorios.
* Personas que atraviesen un proceso de naturalización.

## Solución propuesta

Se busca lograr abarcar, de manera sencilla y fácil de comprender, la mayor cantidad de información posible que sea de utilidad para las personas migrantes y a su vez simplificar los procesos ante los que se podrían encontrar en las instituciones del país.

## Decisiones técnicas

Metodologías utilizadas y procesos definidos.
Git: mecanismo para control de versiones. Se optó por una rama master y una rama por cada funcionalidad. Además, se acordaron reglas para subir código a la rama master, las cuales están especificadas en la definición de listo.

## Artefactos utilizados en el desarrollo del proyecto

### Para el front end

#### **Angular**

Es una plataforma y un marco para crear aplicaciones cliente de una sola página utilizando HTML y TypeScript. Angular está escrito en TypeScript. Implementa funciones básicas y opcionales como un conjunto de bibliotecas de TypeScript que se importan a sus aplicaciones.

#### **CSS**

Es un lenguaje de reglas de estilo que se usa para aplicar estilo al contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir contenido en múltiples.

#### **HTML**

Es el lenguaje de marcado para estructurar y dar significado al contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.

#### **Javascript**

JavaScript (a menudo abreviado como JS) es un lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase, y es mejor conocido como el lenguaje de scripting para páginas web, pero también se usa en muchos entornos que no son de navegador.

#### **Typescript**

TypeScript es un lenguaje de programación desarrollado y mantenido por Microsoft. Es un superconjunto sintáctico estricto de JavaScript y agrega escritura estática opcional al lenguaje. TypeScript está diseñado para el desarrollo de grandes aplicaciones y transcompila a JavaScript. Como TypeScript es un superconjunto de JavaScript, los programas JavaScript existentes también son programas TypeScript válidos.

### Para el back end

#### **Node.js**

Node.js (Node) es una plataforma de desarrollo de código abierto para ejecutar código JavaScript en el lado del servidor. Node es útil para desarrollar aplicaciones que requieren una conexión persistente del navegador al servidor.

#### **Strapi**

Strapi es un sistema de gestión de contenidos desacoplado basado en Node.js. Esto consiste en un sistema similar a Wordpress o a Wix pero que prescinde de un front end o una capa de presentación. En su lugar, los datos almacenados en Strapi son accesados mediante un API que permite las operaciones CRUD en lo que es el cuerpo de la aplicación, el backend. De esta manera, es posible sobrellevar las restricciones que los sistemas de gestión de contenidos típicamente tienen. 

## Repositorio de código y estrategia git para el proyecto

#### **Repositorio**

Se usó Github para guardar el repositorio que contiene el código del desarrollo del proyecto, el cual se encuentra en el siguiente enlace: 
* https://github.com/observatorio-migracion/front-end
* https://github.com/observatorio-migracion/back-end

#### **Estrategia git para el proyecto**

La estrategia de git que se utlizó fue la de branching; en esta forma de trabajo, la estructura es la siguiente: primero, se tiene la rama del master, luego una por cada funcionalidad.

Cabe aclarar que en la rama master únicamente se actualizan los commits y merge al final de que se haya conversado que el código cumple la definción de listo; esto para tener versiones funcionales en el master y poder asegurar que la aplicación haya sido probada y funciona correctamente antes de ser agregada a la rama y posteriormente subirla al repositorio de Heroku, que es momentáneamente donde se puede publicar la página web y en el futuro ya será en el servidor de la UCR.

## Definición de listo
Código funcional, sin errores de compilación, aprobado y revisado por los demás desarrolladores. 
