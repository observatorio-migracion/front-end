# Documentación URLparser.ts
Esta sección contiene la documentación del código .ts del componente helper URLparser de la página web. Estas secciones corresponden a funciones extra usadas a lo largo del programa, dichas funciones se les dio el nombre de helpers y fueron ubicadas en esta sección como tal.

### Código

Importa environment de la carpeta fuente src local del programa ubicada en environments
``` ts
import {environment} from '../../environments/environment';
```

Define la constante APIUrl como una hilera, la cual es igualada con la url obtenido a través del api de environment
``` ts
const APIUrl:string = environment.api.url;
```

Define la función parseURLImage, dicha función recibe una hilera llamada url, si dicha entrada corresponde a un valor valido se le hace un append de la constante definida previamente y se devuelve el resultado.
``` ts
const parseURLImage = function(url:string | undefined):string{
    let result = '';
    if(url){
        result+=APIUrl+url;
    }
    return result;
}
```

Exporta la clase para ser usada en otras instancias
``` ts
export {parseURLImage};
```
