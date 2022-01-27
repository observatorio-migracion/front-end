# Documentacion phonebook.ts

Esta sección contiene la documentación del codigo .ts del elemento phonebook de la página web. Dentro de su estructura visual posee: 
* Barra de bsusqueda: Cuadro donde se escribe el texto para realizar la busca de un contacto que lo contenga o así como un botón con el icono de busqueda
* Lista de contactos: se muestra una lista de contactos ya sea los axistentes aí como los ingresados en la barra de busqueda, en el queb cada uno muestra su titulo así como una  lista de sus números de telefono. Al dar click a un contacto muestra un Modal con la información completa del contacto
* Modal de información: muestra el título, la descripción, el horario, un enlace al lugar, un enlace al sitio web y una lista de los numeros de telegono del contacto. Al final sale un botón para cerrar
* Botón para ir arriba: este se puede clikear y presenta la parte superior de la página, es descrito en el componente fab
* Footer:  muestra los detalles descritos en el componente footer

### Código

Importa los componentes Component y OnInit desde la API Core de Angular

``` ts
import { Component, OnInit } from '@angular/core';
```
Importa de la carpeta de models el modelo de Contacto
``` ts
import { Contact } from 'src/app/models/Contact';
```
Importa de la carpeta de services el servicio de Contacto
``` ts
import { ContactService } from '../../services/contact.service';
```
Agrega un componente selector de CSS llamado app-phonebook que identifica esta directiva en una plantilla y activa la instanciación de la directiva. 
Luego agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class PhonebookComponent implements OnInit {
    //codigos siguientes
}
```

Para la clase PhonebookComponent se definem los atributos de la clase. Primero una lista de contactos, un contancto llamado contactSelected, un atributo string para guardar alguna consulta llamado searchQuery, un atrobuto readonly (solo lectura) de limite de contacto, atrobutos para el incio de contacto, oreden de contacto, tamaño de lista de contacto, y un atributo de buscador de parametros.
``` ts
  public contactList:Contact[];
  public contactSelected:Contact;
  public searchQuery:string;
  public readonly contactLimit;
  public contactStart;
  public contactOrder;
  public contactListSize;
  public searchParams;
```

El constructor de la clase PhonebookComponent recibe como parametro el servicio de contactos.  Luego crea un nuevo array de contactos, crea un nuevo contacto con unos calores inciales, inicaliza el atributo searchQuery  en comillas simples '' al igual que el atributo searchParams, inicializa contactLimit con un valor de 4,  a contactStart y a contactListSize los inicializa en 0, y por último contactOrder se incializa cómo 'titulo:asc' pata que sean ordenado por el título asendentemente.
``` ts
constructor(private _contactService: ContactService) {
    this.contactList = new Array<Contact>();
    this.contactSelected = new Contact('', '','','','','','','','','','','');
    this.searchQuery = '';
    this.contactLimit = 4;
    this.contactStart = 0;
    this.contactOrder = 'titulo:asc';
    this.contactListSize = 0;
    this.searchParams = '';
  }
```


``` ts
  ngOnInit(): void {
    this._contactService.getContactsListSize(this.searchParams).subscribe(size => {
      this.contactListSize = size;
    }, err => console.error(err));
    this.loadContacts();
  }
```
 
``` ts
  goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
```

``` ts 
  onScroll(){
    if (this.contactStart <= this.contactListSize){
      this.contactStart += this.contactLimit;
      this.loadContacts();
    }
  }
```

``` ts
  loadContacts(){
    this._contactService.getContactsListSize(this.searchParams).subscribe(size => {
      this.contactListSize = size;
    }, err => console.error(err));
    this._contactService.getContactsList(this.searchParams,this.contactOrder, this.contactStart, this.contactLimit).subscribe(
      (contacts: Contact[]) => {
        this.contactList.push(...contacts);
        this.splitNumberContact();
      },
      err => {
        console.error(err)
      }
    );
  }
```

``` ts
  splitNumberContact(){
    this.contactList.forEach(c => {
      c.numberList = c.numero.split(',');
    })
  }
```

``` ts
  showContact(contact:Contact){
    this.contactSelected = contact;
    let contactNumbers: string[] = this.contactSelected.numero.split(',');
  }
```

``` ts
  renderFirstLetter(contact:Contact, prev:Contact, index:number){
    if( index > 0 && contact.titulo && prev.titulo){
      const a = contact.titulo[0];
      const b = prev.titulo[0];
      if(a === b ){
        return false;
      }
    }
    return true;
  }
```

``` ts
  loadContactListSearch(): void {
    if (this.searchQuery) {
      this.contactList = [];
      this.searchParams = '';
      this.searchParams += `_where[_or][0][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][descripcion_contains]=${this.searchQuery}`;
      this.loadContacts();
    }else{
      this.searchParams = '';
      this.contactStart = 0;
      this.contactList = [];
      this.loadContacts();
    }
  }
```

``` ts
  parseURL(url:string):string{
    let result:string = '';
    if(!url.startsWith('http://') && !url.startsWith('https://')){
      result = 'http://'+url;
    }
    else{
      result = url;
    }
    return result;
  }
```
