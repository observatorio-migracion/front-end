# Documentación Contacts.ts
### Esta sección contiene la documentación del código contacts.ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utilizan para formar la base de datos de la página.

### Código

Esta clase define Contact, que corresponde a un contacto del directorio de contactos de la página. 
Declara las variables: *id*, *titulo*, *descripcion*, *correo*, *lugar*, *horario*, *web*, *numero*, *publishedAt*, *createdAt*, *updatedAt* y *gps*.
``` ts
export class Contact {
    numberList: any;
    constructor(
        public id:           string,
        public titulo:       string,
        public descripcion:  string,
        public correo:       string,
        public lugar:        string,
        public horario:      string,
        public web:          string,
        public numero:       string,
        public publishedAt: string,
        public createdAt:   string,
        public updatedAt:   string,
        public gps: string
    ){}
}
```