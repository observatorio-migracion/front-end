# Documentacion navbar.css

 Esta seccion contiene la documentacion del navbar.css del componente navbar de la pagina web. Dentro de su estructura visual posee: 
* Darktoogle : llamado al componente darktoggle, es el botón para cambiar entre el modo claro y el modo oscuro el tema de la página
* Logo UCR : logo representativo de la Universidad de Costa Rica, al dar click redirige a la página inicial   de la universidad
* Observatorio de Migración: nombre de la página que al dar click redirige a la página principal del observatorio
* Barra de navegación : muestra las diferentes opciones de pagínas para que el usuario pueda navegar a treavez de ellas,  entre ellas se encuentran el inicio, blog, nosotros, directorio
* Barra de  decoración : es ua barra cuya unica funcionalidad es mostrar la misma imagen que la barra de arriba para efectos de estética, una mejor visualización de la página

### Codigo

 Un atributo del navbar que tenga la clase nav-container 
``` css
.nav-container{
  /* min-height: 190px; */
}
``` 

En cualquier atributo del navbar que tenga la clase header-container tiene un backgroud con una caracteristica de linnear-gradient para una transición progresiva entre los colores de las variables navbar-gradient-01, navbar-gradient-01  y la url de una imagen. La propiedad de background-repeate se especifica con repeat para que la imagen de fondo se repita
``` css
.header-container{
  background: linear-gradient(var(--navbar-gradient-01), var(--navbar-gradient-01)), url('../../../assets/patterns/p4.jpg');
  background-repeat: repeat; 
  /* height: 150px; */

}
```  
En cualquier atributo del navbar que tenga la clase decoration-bar tenga un ancho de 100% y una altura de 100%, además ina imagen de fondo especificada en la url con una caracteristica de linnear-gradient para una transición progresiva entre los colores de las variables navbar-gradient-02, navbar-gradient-02. La propiedad de background-repeate se especifica con repeat para que la imagen de fondo se repita
```  css
.decoration-bar{
  width:100%; 

  height: 100px;
  background-image: linear-gradient(var(--navbar-gradient-02), var(--navbar-gradient-02)), url('../../../assets/patterns/p4.jpg');
  background-repeat: repeat;
  
}
``` 

Cambia las propiedades de un hr para que tenga in diaplay en block, ancho de 1rem, altura de 4px, color de fondo transparente, el borde de su radio 10px, la posisión erá relativa y el top será de -0.9rem
```  css
hr{
  display: block;
  width: 1rem;
  height: 4px;
  background-color:transparent;
  border-radius: 10px;
  position: relative;
  top:-0.9rem;
}
``` 

En cualquier atributo del navbar que tenga la clase underline-text-decoration se le define el color de la variable underline como color de fondo
```  css
.underline-text-decoration{
  background-color: var(--underline);
}
``` 

En cualquier atributo del navbar que tenga la clase  navbar tendrá un margende 0 y 0 y un padding de 0% y 0.4%
```  css
.navbar{
    margin: 0 0;
    padding: 0% 0.4%;
}
``` 

A los atributos de tipo a de la clase  navbar tendrán las siguientes propiedades como el color que está en la variable font-1, el margen de la izquierda de 1 rem, una posición relativa y el top de -1.2rem
```  css
.navbar a{
    color: var(--font-1);
    margin-left: 1rem;
    position: relative;
    top:-1.2rem;
}
``` 

En cualquier atributo del navbar que tenga la clase navbar-nav
tendrá una posición relativa y un top de 1.2 rem
```  css
.navbar-nav{
  position: relative;
  top:1.2rem;
}
```  

A los le dentro del atributo a que se encuentren en la clase navbar tendrán definido el color de la variable font.1 y el tamaño de la letra de 1 rem
```  css
.navbar li a{
    color: var(--font-1);
    font-size: 1rem;
}
```  

En cualquier atributo del navbar que tenga la clase logo-container tendrá las siguientes propiedades como un ancho de 100%, un display de tipo flex, la juntificaación del content de tipo space-between, un margen top de 5px, un padding de 0 y 1 rem, un margen inferior de 16 px
```  css
.logo-container{
  width: 100%;
  display:flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 1rem;
  margin-bottom: 16px;
}   
```  

Al unico elemento que tenga el ID logo tendrá im padding superior de 0.5rem y un paddindg hacia la derrecha de 1rem
```  css
#logo{
  padding-top: 0.5rem;
  padding-right: 1rem;
}
``` 
    
En cualquier atributo del navbar que tenga la clase navbar-nav tendrá un margen derecho de 3.5 rem
``` css  
.navbar-nav {
    margin-right: 3.5rem;
} 
```  
 
 ``` css
 @media (min-width: 1024px){
    .active-link{
        border-radius: 0.2rem;
    }
    .nav-item{
        margin: 0 3%;
    }
    #search-button{
        margin: 0 3%;
    }
    .decoration-bar{
      height: 10%;
    }
 }
``` 

```  css
@media (max-width: 800px) {
    .navbar li a:hover{
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
    .navbar a{
      font-size: 1.2rem;
    }
    .navbar-brand{
        font-size: 1.4rem;
    }
    .active-link{
        font-weight: bold;
     }
     #logo{
      width: 80px;
    }
     .nav-item{
        margin: 0 0;
    }
    #search-button{
        margin: 0 0;
    }
    .decoration-bar{
      display: none;
    }
}
```  

```  css
@media (max-width: 300px) {
    * {
        font-size: 0.8rem;
    }
    .navbar-brand{
        font-size: 1.6rem;
    }
}
```  

```  css
@media (max-width: 767px) {/*breakpoint for mobile menu*/
    .navbar-nav {
        height: 100vh;
    }    
    .navbar-collapse {
        background: transparent;
        text-align: center;
        /* line-height: 1.8; */
        padding-top: 20%;
    }
}
``` 

En cualquier atributo del navbar que tenga la clase no-transition  tendrá las caracteríticas de ___
```  css
.no-transition {
  -webkit-transition: height 0.01s;
  -moz-transition: height 0.01s;
  -ms-transition: height 0.01s;
  -o-transition: height 0.01s;
  transition: height 0.01s;
}
``` 

```  css
@media (min-width: 767px) {
    .navbar-collapse{   
        display: flex;
        justify-content: flex-end;  
        margin: 0 auto;
    }
}
 /* background-color: red; */
```  
Los elemntos del tipo navbar-toggler se definirán con un margen derecho de 1rem 
```  css
navbar-toggler{
  margin-right: 1rem;
}
``` 