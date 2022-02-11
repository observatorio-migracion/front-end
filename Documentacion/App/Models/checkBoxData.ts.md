# Documentación checkBoxData.ts
### Esta sección contiene la documentación del código checkBoxData.ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utilizan para formar la base de datos de la página. 

### Código

Esta clase define *CheckboxData*, que corresponde a la caja de chequeo utilizada para las categorías de la página, específicamente en la parte de los filtros por categoría del Blog.
``` ts
export class CheckBoxData {
  name: string;
  value: boolean;
};
```

El constructor de la clase *CheckboxData* inicializa dos variables.
``` ts
  constructor(name: string='', value: boolean=false){
    this.name = name;
    this.value = value;
  }
```