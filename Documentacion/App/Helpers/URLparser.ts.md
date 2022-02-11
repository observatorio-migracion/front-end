# Documentación URLparser.ts
### Esta sección contiene la documentación del código URLparser.ts del componente helper URLparser.ts de la página web. Estas secciones corresponden a funciones extra usadas a lo largo del programa.

### Código

Importa **environment** de la carpeta fuente src local del programa ubicada en environments
``` ts
import {environment} from '../../environments/environment';
```

Se inicializa la variable **APIUrl**.
``` ts
const APIUrl:string = environment.api.url;
```

Define la función **parseURLImage**, recibe un parámetro, si es válido, entonces lo concatena con el APIUrl y lo retorna.
``` ts
const parseURLImage = function(url:string | undefined):string{
  let result = '';
  if(url){
      result+=APIUrl+url;
  }
  return result;
  }
```

Exporta la clase para ser usada en otras instancias.
``` ts
export {parseURLImage};
```
