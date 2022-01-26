# Documentación Contacts.ts
Esta sección contiene la documentación del código .ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utiliza para formar la base de datos de la página.

### Código
Esta clase define Contact, que corresponde a un contacto del directorio de contactos de la página. 
Tiene los atributos de identificador del contacto, el titulo, una descripción, correo, lugar del contacto, horario de atención, sitio web, número de telefono, fecha de publicacion en la página, fecha de creación, fecha de actualización y dirección de GPS.

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
        public published_at: string,
        public created_at:   string,
        public updated_at:   string,
        public gps: string
    ){}
}
```