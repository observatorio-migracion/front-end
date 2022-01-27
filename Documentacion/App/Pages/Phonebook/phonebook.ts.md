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

 Este método de la clase PhonebookComponent, hace un llamado al componente y lo inicia, en particular carga los datos generados desde el html y el css. También obtiene el tamaño de la lista de contactos mandando el atributo searchParams, mediante la subcripción  se obtiene el tamaño de los contactos y se retorna un error si no se lograra. Si no hay errorores cargaría los contactos con el método loadContacts.
``` ts
  ngOnInit(): void {
    this._contactService.getContactsListSize(this.searchParams).subscribe(size => {
      this.contactListSize = size;
    }, err => console.error(err));
    this.loadContacts();
  }
```

Este método de la clase PhonebookComponent, devuelve a la parte superior de la página mediante los valores numéricos del ScrollTop donde 0 es el inicio de la página.
``` ts
  goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
```

Este método de la clase PhonebookComponent, es el llamado scroll infinito. Por ende, si la posición actual aun es inferior a la totalidad de los posts indica que aún hay post por cargar, entonces se le adiciona el límite de post establecido por defecto postLimit y se procede a cargar más post.
``` ts 
  onScroll(){
    if (this.contactStart <= this.contactListSize){
      this.contactStart += this.contactLimit;
      this.loadContacts();
    }
  }
```

Este método de la clase PhonebookComponent, obtiene del servicio de contactos el número de contactos con el atributo searchParams como parametro. Mediante la subcripción se obtiene se obtiene el numero de la lista de contactos, si ocurre un error devuelve un error en la consola. Si lo anterior se da correctamente, se obtiene la lista de contactos del servicio de contactos con los atributos de searchParams, contactOrder, contactStart y contactLimit como parámetros. Mediante una subcripción se va obteniendo una lista de contactos y postreriormente se llama al metódo splitNumberContact. Si se porduce un error ante esta información, se mostraría un error en consola.
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

Este método de la clase PhonebookComponent, divide los números telefónicos de la lista de contactos. Mediante un forEach se recorren los contactos y se dividen los numeros utilizando como delimitador las comas.
``` ts
  splitNumberContact(){
    this.contactList.forEach(c => {
      c.numberList = c.numero.split(',');
    })
  }
```

Este método de la clase PhonebookComponent, es utilizado para presentar los contactos en la página del directorio del html. Recibe como parámetro un contacto, el cual es cuardado en el atributo contactSelected y se realiza y una división de los números de telefonos delimitandolos por una coma.
``` ts
  showContact(contact:Contact){
    this.contactSelected = contact;
    let contactNumbers: string[] = this.contactSelected.numero.split(',');
  }
```

Este método de la clase PhonebookComponent, es utilizado para presentar los contactos en la página del directorio del html. Recibe como parámetro un contacto, el contacto previo y el indice del contacto. Aquí mediante un if se verifica si el indice es mayor a 0 y hay un titulo del contacto y hay un titulo del contacto previo entonces se extraen las letras iniciales, se comparan ambas letras y si son estrictamente iguales y genera un booleano retorna falso, pero si son diferentes retornará verdadero. Sino entra en el primer if, también retornará verdadero y se necesita renderizar. 
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

Este método de la clase PhonebookComponent, dependiendo del valor del atributo searchQuery, si este caracter no es vacio entra al if y vacía la lista de contactos y searchParams. Luego se asigna el valor de searchParams dependiedno de si un titulo contiene la consnsulta, similar se asigna al valor de searchParams si una descripción contiene la consulta y por último cargan los contactos. Si el atributo searchQuery está vacío entra al else, vacía los atributos de  searchParams, contactStart, contactList y carga los contactos. 
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

Este método de la clase PhonebookComponent, es utilizado para presentar la url de los contactos en la página del directorio del html. Recibe cómo parámetro  un string de la url. Primero se declara la variable como let llamada result de tipo string. Luego con un if se verifica si la url no inicia con http ni https, si esto es verdadero, se asigna a la variable result una concatenación de http con la url. Pero si el resultado del if es falso, retorna true. 
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
