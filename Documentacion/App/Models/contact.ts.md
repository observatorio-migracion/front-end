# Documentación Contacts.ts
### Esta sección contiene la documentación del código contacts.ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utilizan para formar la base de datos de la página.

### Código

Esta clase define Contact, que corresponde a un contacto del directorio de contactos de la página. 
Declara las variables: *id*, *titulo*, *descripcion*, *correo*, *lugar*, *horario*, *web*, *numero*, *published_at*, *createdAt*, *updatedAt* y *gps*.
``` ts
export class Contact {
  numberList: NumberInfo[] | undefined;

  constructor(
    public id: string,
    public titulo: string,
    public descripcion: string,
    public correo: string,
    public lugar: string,
    public horario: string,
    public web: string,
    public numero: string,
    public published_at: string,
    public createdAt: string,
    public updatedAt: string,
    public gps: string
  ) {}
}
```

Esta interfaz NumberInfo.
Declara las variables *text* y *number*
``` ts
export interface NumberInfo{
  text : string;
  number : string;
}
```