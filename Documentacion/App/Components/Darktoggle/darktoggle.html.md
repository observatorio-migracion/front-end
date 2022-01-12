# Documentacion darktoggle.html

### Esta seccion contiene la documentacion del codigo .html del componente daktoggle de la pagina web. Dentro de su estructura visual posee: 
*  Butón de darktoggle: Es un botón con dos iconos que al dar click cambia el tema de la página,  un sol para cambiar al  tema claro y una luna para cambiar al tema oscuro

### Codigo

Este label encapsula el codigo siguiente del div de clase toggle, su funcionalidad es ser una etiqueta para un elemento en una interfaz de usuario asociada al control for identificado por toggle y de la clase toggle-wrapper

``` html 
<label class="toggle-wrapper" for="toggle">
     <!-- code -->
</label>
``` 

Este div encapsula los siguientes dos elementos, el span de clase hidden y el div de clase icons. Es de  clase toggle y para este caso de algular incluye propiedades para para activar o desactivar el botón y en este caso para verificar también si está activado o no
``` html
    <div class="toggle {{isEnabled ? 'enabled' : 'disabled'}}">
        <!-- code -->
     </div>
``` 

Span de la clase hidden que verifica si la varibale isEnables tiene alguno de los valores
```  html
        <span class="hidden">
            {{isEnabled ? "Enable" : "Disable"}}
        </span>
         <!-- code -->
```  

Este div de la clase icons sirve para el manejo de los modos claro(sun) u oscuro(moon). 
* Sun & moon  : 
  * Primero con el SVG se proporciona una declaración de espacio de nombres cuando SVG se analiza como XML, posterior a esto el se presenta el path de los iconos del sol y la luna
* Botón de toggle : Es un input de id toggle, con tambipen nombre toggle, de tipo checkbox, el cual está en check si la variable isEnabled dice que está activado y al usuario dar click se llama el método toggleState()
```  html
         <!-- code  -->
        <div class="icons">
            <!-- sun -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.995 12C6.995 14.761 9.241 17.007 12.002 17.007C14.763 17.007 17.009 14.761 17.009 12C17.009 9.239 14.763 6.993 12.002 6.993C9.241 6.993 6.995 9.239 6.995 12ZM11 19H13V22H11V19ZM11 2H13V5H11V2ZM2 11H5V13H2V11ZM19 11H22V13H19V11Z" />
                <path d="M5.63702 19.778L4.22302 18.364L6.34402 16.243L7.75802 17.657L5.63702 19.778Z" />
                <path d="M16.242 6.34405L18.364 4.22205L19.778 5.63605L17.656 7.75805L16.242 6.34405Z" />
                <path d="M6.34402 7.75902L4.22302 5.63702L5.63802 4.22302L7.75802 6.34502L6.34402 7.75902Z" />
                <path d="M19.778 18.3639L18.364 19.7779L16.242 17.6559L17.656 16.2419L19.778 18.3639Z" />
            </svg>

            <!-- moon -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" />
            </svg>

        </div>
        <input id="toggle" name="toggle" type="checkbox" checked={{isEnabled}} (click)="toggleState();" />
``` 