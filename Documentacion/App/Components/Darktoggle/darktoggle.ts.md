# Documentacion darktoggle.ts

 Esta seccion contiene la documentacion del darktoggle.ts del componente daktoogle de la pagina web. Dentro de su estructura visual posee: 
*  Butón de darktoggle: Es un botón con dos iconos que al dar click cambia el tema de la página,  un sol para cambiar al  tema claro y una luna para cambiar al tema oscuro

### Codigo
Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
``` 

Importa de la carpeta de services el srevicio temas llamado ThemeService 
``` ts
import { ThemeService } from '../../services/theme.service';
``` 

Importa Subscription de la librería RxJS de Angular que es como la ejecución de un Observable pero este es un recurso llamado desechable.
``` ts
import { Subscription } from 'rxjs';
``` 

Agrega un componente selector de CSS llamado app-darktoggle que identifica esta directiva en una plantilla y activa la instanciación de la directiva. 
Luego agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-darktoggle',
  templateUrl: './darktoggle.component.html',
  styleUrls: ['./darktoggle.component.css']
})
``` 

Exporta la clase DarktoggleComponent para ser usada en otras instancias
``` ts
export class DarktoggleComponent implements OnInit {
    //codigos siguientes
}
``` 

En la clase DarktoggleComponent se crea un atributo booleano para saber si está activado, un string para guardar el tema yun atributo de tpo subscription.
``` ts
  public isEnabled: boolean;
  public theme: string;
  public subscription: Subscription | undefined;
``` 

El constructor de la clase DarktoggleComponent recibe comoparámetro el tema del servicio. Se asigna a el atributo de la clase isEnabled el valor de flaso y al tema se le da un valor de comillas vacias.
``` ts
  constructor(private _themeService: ThemeService) {
    this.isEnabled = false;
    this.theme = '';
  }
``` 

Este método de la clase DarktoggleComponent, hace un llamado al componente y lo inicia, en particular carga los datos generados desde el html y el css.  Asigna a la subcripción el valor de tema del serivico actual de manera que se establece el atributo de tema con un valor, si el tema es estrictamente igual al oscuro, entonces isEnabled se estabece en verdadero pero sino se le asigna a isEnabled el valor de faslo porque está en el tema claro.  
``` ts
  ngOnInit(): void {
    this.subscription = this._themeService.currentTheme.subscribe(theme => {
      this.theme = theme;
      if (this.theme === 'dark') {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }
    })
  }
``` 

Este método de la clase DarktoggleComponent tiene como objetivo cambiar es estado actual del tema. Primero estableceel atributo isEnableden su valor negativo u opuesto. Leugo crea una constante llamada body con el valor del primer elemento del documento de la clase body que es lo que devuellve document.querySelector con el parametrode body. Si no devuelve un elemento nulo sucede lo siguiente. Primero  se alterna al modo oscuro en los elementos del body. Luego se obtiene el tema guardado en el local storage y lo compara estictamente con el oscuro, si está en oscuro lo dejaen claro, sino lo cambia de claro a oscuro y lo guarda en el atributo theme. Guarda a el valor guardado del thema en el localsotorage. Por último, 
establece el tema en el servicio pasandolo como parametro al metodo setTheme del serivicio.
``` ts
  toggleState() {
    this.isEnabled = !this.isEnabled;
    const body = document.querySelector("body");
    if (body) {
      body.classList.toggle('dark');
      this.theme = (window.localStorage.getItem('theme') === 'dark') ? 'light' : 'dark';
      window.localStorage.setItem('theme', this.theme);
      this._themeService.setTheme(this.theme);
    }
  }
``` 

