# Documentacion darktoggle.css

 Esta seccion contiene la documentacion del darktoggle.css del componente darktoggle de la pagina web. Dentro de su estructura visual posee: 
*  Butón de darktoggle: Es un botón con dos iconos que al dar click cambia el tema de la página,  un sol para cambiar al  tema claro y una luna para cambiar al tema oscuro

### Codigo

Configura por ser  * a todos los elementos del componente para que definir su ancho y largo segpun borden-box
``` css
* {
  box-sizing: border-box;
}
``` 

En cualquier atributo del navbar que tenga la clase hidden tendrá las propiedades de 
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

En cualquier atributo del navbar que tenga la clase toggle-wrapper tendrá un acho de 65px y un display de tipo block
```  css
.toggle-wrapper {
  /* width: 130px; */
  width: 65px;
  display: block;
}
``` 

En cualquier atributo del navbar que tenga la clase  toggle tendrá caracteristicas de una altura de 30px, un ancho de 65px, fondo del color de la variable black-toggle, el radio del borde de 40px, un padding de 6px, la posición relaitva, margen automático, el cursor de tipo poiter, el  fondo del color de la variable foreground-toggle y una transición de color de la variable transition-toggle 
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

En cualquier atributo del navbar que tenga la clase  toggle
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

En cualquier atributo del navbar que tenga la clase toggle que 
```  css
.toggle.enabled::before {
  transform: translateX(35px);
  /* transform: translateX(65px); */
}
```

Los elementos de input que se encuantren
```  css
.toggle input {
	position: absolute;
	top: 0;
    opacity: 0;
}
``` 
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
