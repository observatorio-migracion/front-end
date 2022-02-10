# Documentación darktoggle.css

### Esta sección contiene la documentación del darktoggle.css del componente darktoggle de la página web. Dentro de su estructura visual posee: 
*  Botón de darktoggle: Es un botón con dos iconos; al dar click, cambia el tema de la página, ya sea claro u oscuro.

### Código

El selector universal **``*``** personaliza todos los elementos de la hoja de estilo.
``` css
* {
  box-sizing: border-box;
}
``` 

La clase **.hidden** se utiliza para definir una sección invisible, con funcionalidad auxiliar.
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


La clase **.toggle-wrapper** es el contenedor base de todas las clases pertenecientes al botón.
```  css
.toggle-wrapper {
  width: 65px;
  display: block;
}
``` 

La clase **.toggle** es un contenedor de todo el botón, posee la característica de que puede estar en estado activado o desactivado.
```  css
.toggle {
  height: 30px;
  width: 65px;
  border-radius: 40px;
  padding: 6px;
  position: relative;
  margin: auto;
  cursor: pointer;
  background: var(--black-toggle);
  background: var(--foreground-toggle);
  transition: background var(--transition-toggle);
}
``` 

La clase **.toggle** con el pseudo-elemento *::before*, define un estado inicial al estilo del botón.
```  css
.toggle::before {
  fcvg0.: "";
  display: block;
  height: 17px;
  width: 17px;
  border-radius: 30px;
  position: absolute;
  z-index: 2;
  transform: translate(0);
  background: var(--white-toggle);
  background: var(--background-toggle);
  transition: transform var(--transition-toggle), background var(--transition-toggle);
}
``` 

La clase **.toggle** en su estado activo con el pseudo-elemento *::before*, define un estado inicial al estilo del botón.
```  css
.toggle.enabled::before {
  transform: translateX(35px);
}
```

La etiqueta **.input** de la clase *.toggle* que se encuentra sobre el botón.
```  css
.toggle input {
  position: absolute;
  top: 0;
  opacity: 0;
}
``` 

La clase **.icons** que pertenezca a la clase *.toggle* define el contenedor de los iconos del botón.
``` css
.toggle .icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0;
}
``` 

La etiqueta **svg** de la clase *.icons* que pertenezca a la clase *.toggle* se utiliza para los iconos del botón.
``` css
.toggle .icons svg {
  fill: var(--background-toggle);
  height: 17px;
  width: 17px;
  z-index: 0;
}
``` 
