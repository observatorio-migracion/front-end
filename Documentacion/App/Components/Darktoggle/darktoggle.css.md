# Documentacion darktoggle.css

 Esta seccion contiene la documentacion del darktoggle.css del componente darktoggle de la pagina web. Dentro de su estructura visual posee: 
*  Butón de darktoggle: Es un botón con dos iconos que al dar click cambia el tema de la página,  un sol para cambiar al  tema claro y una luna para cambiar al tema oscuro.

### Codigo

Configura por ser  * a todos los elementos del componente para que definir su ancho y largo segpun borden-box
``` css
* {
  box-sizing: border-box;
}
``` 

En cualquier atributo del navbar que tenga la clase hidden tendrá las propiedades de  clip que define la visibilidad del elemento, con los valores de  hace que se mantenga el contenido visible para los lectores. El clippath es para saber cuanta parte de elemento debe mostrarse en este caso un 40%. LA altura y un ancho ambos estan definidos en un 1px. El overflow (desbordamiento) indica sise debe recortar el contenido si el elemento es demaciado grande y el atributo de hidden(esonder) dice que resto de contenido  sobreante será invisible. Tiene una posisión absoluta. La propiedad de white-space define cómo se tratará el espacio en blanco dentro de un elemento reduciendo ese espacio. 
```  css
.hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
``` 

En cualquier atributo del navbar que tenga la clase toggle-wrapper tendrá un acho de 65px y un display de tipo block.
```  css
.toggle-wrapper {
  /* width: 130px; */
  width: 65px;
  display: block;
}
``` 

En cualquier atributo del navbar que tenga la clase  toggle tendrá caracteristicas de una altura de 30px, un ancho de 65px, el fondo del color de la variable black-toggle, el radio del borde de 40px, un padding de 6px, la posición relaitva, margen automático, el cursor de tipo poiter, el  fondo del color de la variable foreground-toggle y una transición de color de la variable transition-toggle. 
```  css
.toggle {
  /* height: 65px;
  width: 130px; */
  height: 30px;
  width: 65px;
  background: var(--black-toggle);
  border-radius: 40px;
  /* padding: 12px; */
  padding: 6px;
  position: relative;
  margin: auto;
  cursor: pointer;
  background: var(--foreground-toggle);
  transition: background var(--transition-toggle);
}
``` 

En cualquier atributo del navbar que tenga la clase  toggle que tiene un prelemento antes (before) con una contenido de comillas (""), con un tipo de display de tipo bloque, con un alto y ancho ambos de 17px, el radio del border 30px, el fondo del color de la variable --white-toggle, con posición absoluta,  un z-index de valor 2 para acomodar el elemento. La transformación del elemento y lo traslada en el eje x (0). Cuando ocurra una trasición del elemento se realiza una transformación con la variable --transition-toggle y el fondo del color de la variable --background-toggle. También otra transición con la variable --transition-toggle y un fondo con la variable --transition-toggle.
```  css
.toggle::before {
  content: "";
  display: block;
  /* height: 41px;
  width: 41px; */
  height: 17px;
  width: 17px;
  border-radius: 30px;
  background: var(--white-toggle);
  position: absolute;
  z-index: 2;
  transform: translate(0);
  transition: transform var(--transition-toggle);
  background: var(--background-toggle);
  transition: transform var(--transition-toggle), background var(--transition-toggle);
}
``` 

En cualquier atributo que tenga la clase toggle que, esté habilitado y sea un prelemnto antes, tendá una transformación donde se traslada en el eje X 35 px.
```  css
.toggle.enabled::before {
  transform: translateX(35px);
  /* transform: translateX(65px); */
}
```

Los elementos de input que se encuantren con la clase toogle tendrán una posición absoluta, tiene un valor de 0 parte de arriba de la posición  y una opacidad de 0.
```  css
.toggle input {
	position: absolute;
	top: 0;
    opacity: 0;
}
``` 

En cualquier atributo que tenga la clase toggle, que también tenga la clase icons tiene un display de tipo flex, el contenido justificado específicamente con espación entre los contenidos, los item alineados de manera centrada, una altura de 100% y un margen de 0 y 0px.
``` css
.toggle .icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* margin: 0 5px; */
  margin: 0 0px;

}
``` 

En cualquier atributo que tenga la clase toggle, que también tiene la clase icons y sea un elemento de svg. La propiedad fill es para rellenar el color del svg con el de la variable --background-toggle, tiene el alto y ancho ambos de 17 px y un z-index de valor 0 para acomodar el elemento.
``` css
.toggle .icons svg {
  fill: var(--background-toggle);
  /* height: 30px;
  width: 30px; */
  height: 17px;
  width: 17px;
  z-index: 0;
}
``` 
