# Documentación checkBoxData.ts
Esta sección contiene la documentación del código .ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utiliza para formar la base de datos de la página. 

### Código
Esta clase define CheckboxData, que corresponde a la caja de chequeo utilizada para las categorías de la página, específicamente en la parte de los filtros por categoría del Blog.
Tiene los atributos de nombre y valor, los cuales deben ser ingresados como parametros a la hora de crear la caja.
``` ts
export class CheckBoxData {
    name: string;
    value: boolean;
  
    constructor(name: string='', value: boolean=false){
      this.name = name;
      this.value = value;
    }
  
};
```