# Documentación navbar.css

### Esta sección contiene la documentación del navbar.css del componente navbar de la página web. Dentro de su estructura visual posee: 
* Darktoogle: llamado al componente *darktoggle*, es el botón para alternar el tema de la página entre modo claro y oscuro.
* Logo UCR: logo representativo de la Universidad de Costa Rica, al dar click, redirige a la página oficial de la universidad.
* Observatorio de Migración: nombre de la página, al dar click, redirige a la página principal del Observatorio.
* Barra de navegación: muestra las diferentes opciones de pagínas para que el usuario pueda navegar a través de ellas.

### Código

La clase **.header-container** es un contenedor de todo el encabezado, define el estilo base.
``` css
.header-container {
  background: linear-gradient(var(--navbar-gradient-01), var(--navbar-gradient-01)), url("../../../assets/patterns/p4.jpg");
  background-repeat: repeat;
}
```  

La etiqueta **hr** aplica el estilo a los cortes horizontales de línea dentro de las opciones del navbar.
```  css
hr {
  display: block;
  width: 1rem;
  height: 4px;
  background-color: transparent;
  border-radius: 10px;
  position: relative;
  top: -0.9rem;
}
``` 

La clase **.underline-text-decoration** define el estilo de subrayado a las opciones del navbar.
```  css
.underline-text-decoration {
  background-color: var(--underline);
}
``` 

La clase **.navbar** es un contenedor del navbar, define el estilo base.
```  css
.navbar {
  margin: 0;
  padding: 0% 0.4%;
}
``` 

La etiqueta **a** de la clase *.navbar* se utiliza para los enlaces de dicha clase.
```  css
.navbar a {
  color: var(--font-1);
  margin-left: 1rem;
  position: relative;
  top: -1.2rem;
}
``` 

La clase **.navbar-nav** aplica estilo a la lista de opciones del navbar.
```  css
.navbar-nav {
  position: relative;
  top: 1.2rem;
  margin-right: 3.5rem;
}
```  

La etiqueta **a** que pertenece a la etiqueta *li*, que pertenezca a la clase *.navbar* se utiliza para dar estilo a las opciones del navbar.
```  css
.navbar li a {
  color: var(--font-1);
  font-size: 1rem;
}
```  

La clase **.logo-container** es un contenedor del logo, define el estilo base.
```  css
.logo-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 1rem;
  margin-bottom: 16px;
} 
```  
    
La clase **.no-transition** aplica un efecto al desplegar las opciones del navbar.
```  css
.no-transition {
  transition: height 0.01s;
}
``` 

La clase **.navbar-toggler** aplica un estilo al botón para desplegar el navbar.
```  css
.navbar-toggler {
  margin-right: 1rem;
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (min-width: 1024px) {
  .active-link {
    border-radius: 0.2rem;
  }

  .nav-item {
    margin: 0 3%;
  }

  #search-button {
    margin: 0 3%;
  }

  .decoration-bar {
    height: 10%;
  }
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
```  css
@media (max-width: 800px) {
  .navbar a {
    font-size: 1.2rem;
  }

  .navbar li a:hover {
    font-size: 1rem;
    color: var(--font-1);
  }

  * {
    font-size: 1rem;
  }

  nav {
    width: 100%;
  }

  .navbar-nav {
    margin-right: 0.5rem;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }

  .active-link {
    font-weight: bold;
  }

  #logo {
    width: 80px;
  }

  .nav-item {
    margin: 0;
  }

  #search-button {
    margin: 0;
  }

  .decoration-bar {
    display: none;
  }
}
```  

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
```  css
@media (max-width: 300px) {
  * {
    font-size: 0.8rem;
  }

  .navbar-brand {
    font-size: 1.6rem;
  }
}
```  

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
```  css
@media (max-width: 767px) {/* breakpoint for mobile menu */
  .navbar-collapse {
    background: transparent;
    text-align: center;
    padding-top: 20%;
  }
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
```  css
@media (min-width: 767px) {
  .navbar-collapse {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  }
}
```  