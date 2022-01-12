# Documentación Observatorio de información TCU 652 
## Indice de comentarios del codigo
   * ### [Componentes](Observatorio/src/app/components)
      * #### [Codigo Darktoggle](Observatorio/src/app/components/darktoggle)
        * #### [Documentacion Darktoggle CSS](Documentacion/App/Components/Darktoggle/darktoggle.css.md)
        * #### [Documentacion Darktoggle HTML](Documentacion/App/Components/Darktoggle/darktoggle.html.md)
        * #### [Documentacion Darktoggle TS](Documentacion/App/Components/Darktoggle/darktoggle.ts.md)
      * #### [Codigo Fab](Observatorio/src/app/components/fab)
        * #### [Documentacion Fab CSS](Documentacion/App/Components/Fab/fab.css.md)
        * #### [Documentacion Fab HTML](Documentacion/App/Components/Fab/fab.html.md)
        * #### [Documentacion Fab TS](Documentacion/App/Components/Fab/fab.ts.md)
      * #### [Codigo Footer](Observatorio/src/app/components/footer)
        * #### [Documentacion Footer CSS](Documentacion/App/Components/Footer/footer.css.md)
        * #### [Documentacion Footer HTML](Documentacion/App/Components/Footer/footer.html.md)
        * #### [Documentacion Footer TS](Documentacion/App/Components/Footer/footer.ts.md)
      * #### [Codigo Navbar](Observatorio/src/app/components/navbar)
        * #### [Documentacion Navbar CSS](Documentacion/App/Components/Navbar/navbar.css.md)
        * #### [Documentacion Navbar HTML](Documentacion/App/Components/Navbar/navbar.html.md)
        * #### [Documentacion Navbar TS](Documentacion/App/Components/Navbar/navbar.ts.md)
      * #### [Codigo Post-Card](Observatorio/src/app/components/post-card)
        * #### [Documentacion Post-Card CSS](Documentacion/App/Components/Post-Card/post-card.css.md)
        * #### [Documentacion Post-Card HTML](Documentacion/App/Components/Post-Card/post-card.html.md)
        * #### [Documentacion Post-Card TS](Documentacion/App/Components/Post-Card/post-card.ts.md)
   * ### [Codigo Helpers](Observatorio/src/app/helpers)
      * #### [Documentacion PostStyleConfig TS](Documentacion/App/Helpers/postStyleConfig.ts.md)
      * #### [Documentacion URLparser TS](Documentacion/App/Helpers/URLparser.ts.md)
   * ### [Models](Observatorio/src/app/models)
   * ### [Pages](Observatorio/src/app/pages)
      * #### [Codigo About](Observatorio/src/app/pages/about)
        * #### [Documentacion About CSS](Documentacion/App/Pages/About/about.css.md)
        * #### [Documentacion About HTML](Documentacion/App/Pages/About/about.html.md)
        * #### [Documentacion About TS](Documentacion/App/Pages/About/about.ts.md)
      * #### [Codigo Blog](Observatorio/src/app/pages/blog)
        * #### [Documentacion Blog CSS](Documentacion/App/Pages/Blog/blog.css.md)
        * #### [Documentacion Blog HTML](Documentacion/App/Pages/Blog/blog.html.md)
        * #### [Documentacion Blog TS](Documentacion/App/Pages/Blog/blog.ts.md)
      * #### [Codigo Contact](Observatorio/src/app/pages/contact)
        * #### [Documentacion Contact CSS](Documentacion/App/Pages/Contact/contact.css.md)
        * #### [Documentacion Contact HTML](Documentacion/App/Pages/Contact/contact.html.md)
        * #### [Documentacion Contact TS](Documentacion/App/Pages/Contact/contact.ts.md)
      * #### [Codigo Home](Observatorio/src/app/pages/home)
        * #### [Documentacion Home CSS](Documentacion/App/Pages/Home/home.css.md)
        * #### [Documentacion Home HTML](Documentacion/App/Pages/Home/home.html.md)
        * #### [Documentacion Home TS](Documentacion/App/Pages/Home/home.ts.md)
      * #### [Codigo Phonebook](Observatorio/src/app/pages/phonebook)
        * #### [Documentacion Phonebook CSS](Documentacion/App/Pages/Phonebook/phonebook.css.md)
        * #### [Documentacion Phonebook HTML](Documentacion/App/Pages/Phonebook/phonebook.html.md)
        * #### [Documentacion Phonebook TS](Documentacion/App/Pages/Phonebook/phonebook.ts.md)
      * #### [Codigo Post](Observatorio/src/app/pages/post)
        * #### [Documentacion Post CSS](Documentacion/App/Pages/Post/post.css.md)
        * #### [Documentacion Post HTML](Documentacion/App/Pages/Post/post.html.md)
        * #### [Documentacion Post TS](Documentacion/App/Pages/Post/post.ts.md)
   * ### [Services](Observatorio/src/app/services)
      * #### [Documentacion Contact TS](Documentacion/App/Services/contact.ts.md)
   * ### [Assets](Observatorio/src/assets)
   * ### [Environments](Observatorio/src/environments)

## Definiciones, acronimos y abreviaturas

**Inicio**: pagina principal del sitio web.
**Blog**: pagina que recopila todas las publicaciones que se han realizado en la sitio web.
**Nosotros**: pagina que brinda un apartado informativo sobre los involucrados en el proyecto.
**Directorio**: Apartado ubicado en la pagina inicio que brinda informacion de contacto con algunos entes afines al proyecto de TCU
**Publicaciones**: elementnos informativos publicados en la pagina para ser consultados por los usuarios que visiten el sitio web.  
**Eventos**: Registro de eventos informativos, estos poseen titulo, fecha, enlace y descripcion.
**Categorias**: Clasificaciones que posee la pagina para aplicar a las distintas publicaciones que se registren.
**Contacto**: Informacion especifica sobre algun ente a fin al proyecto
**UCR**: Universidad de Costa Rica

## Introducción

La función de este documento es explicar y detallar las tecnologías, diseños y funcionalidades de la pagina del Observatorio de Migración, este consiste en un sitio web en el que se realizan publicaciones informativas sobre temas relaciones con migracion. Además, proporciona contactos, eventos y enlaces a material de ayuda para los usuarios de la página.

El documento está compuesto por una portada, introducción, miembros del equipo de desarrollo, descripciones del sistema, artefactos de la base de datos utilizados, decisiones técnicas y bibliografía

## Listado de equipos y miembros de los equipos

* Eduardo
* Jose David
* Jim
* Andrey
* Stephanie

## Descripción General del sistema

Esta es una pagina web creada para el proyecto de TCU 652 de la Universidad de Costa Rica. Este proyecto viene a servir de herramienta para la publicacion de informacion y contenido relacionada con las distintas tematicas del proyecto. La pagina presenta funcionalidades para agregar publicaciones, contcatos y eventos mediante la administracion del backend, su contenido es enfocado a la consulta e informacion por lo que a traves de ella solo pueden realizar consultas.

## Problema que resuelve

Falta de un lugar que brinde información  centralizada sobre los procesos, actividades y recursos acerca de temas para las personas migrantes. 

## Interesados del proyecto y tipos de usuarios

* Personas que atraviecen un proceso migratorio
* Investigadores y estudiantes interesados en los procesos migratorios
* Personas atraviecen un proceso de naturalización

## Solución propuesta

Se busca lograr abarcar, de manera sencilla y fácil de comprender, la mayor cantidad de información posible que sea de utilidad para las personas migrantes y a su vez simplificar los procesos ante los que se podrían encontrar en las instituciones del país.

## Decisiones técnicas

Metodologías utilizadas y procesos definidos.
Git: mecanismo para control de versiones. Se optó por una rama por master y una rama por cada desarrollador. Además, se acordaron reglas para subir código a la rama master, las cuales están especificadas en la definición de listo.

## Artefactos utilizados en el desarrollo del proyecto

### Para el front end

#### **Angular**

Es una plataforma y un marco para crear aplicaciones cliente de una sola página utilizando HTML y TypeScript. Angular está escrito en TypeScript. Implementa funciones básicas y opcionales como un conjunto de bibliotecas de TypeScript que se importan a sus aplicaciones.

#### **CSS**

Es un lenguaje de reglas de estilo que se uso para aplicar estilo al contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir contenido en múltiples.

#### **HTML**

Es el lenguaje de marcado  para estructurar y dar significado al contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página..

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

#### **Estrategia git para el proyecto**

La estrategia de git que se utlizó fue la de branching; en esta forma de trabajo, la estructura es la siguiente: primero, se tiene la rama del master, luego una por cada desarrollador individual.

Cabe que en la rama master únicamente se destacan los commits y merge al final de que se haya conversado que el codigo cumple la defincin de listo; esto para tener versiones funcionales en el master y poder asegurar que el la aplicación haya sido testeada y funcione correctamente antes de ser agregada a la rama y posteriormente subirla al repositorio de heroku, que es momentaneamente donde se puede publicar la pagina web y en el futuro ya será en el servidor de la UCR.


## Definicion de listo
Codigo funcional, sin errores de compilación, aprobado y revisado por los demás desarrolladores. 