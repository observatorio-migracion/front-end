# Documentacion home.component.spect.ts

Esta sección contiene la documentación del codigo .ts del elemento home de la página web. Dentro de su estructura visual posee: 

* Información de la pagina: Proyecto del Observatorio de Migración.
*  Titulo "Categorias": siguiente parte de categorias
*  Listado de las categorías existentes: contiene los nombres y las imágenes de las primeras 4 categorias 
*  Botón "ver más": opción para ser seleccionada y ver las demás categorias exixtentes   
* Titulo "Publicaciones recientes": siguiente parte de publicaciones recientes
* Listado de Post Cards: listado de los post cards de los post
* Botón "Ir al blog": Botón que lleva al usuario al página del blog = /blog
* Titulo "Eventos Proximos": siguiente parte de eventos próximos
* Lista de actividades: para cada una de las activiades se puede observar el nombre, la fecha y "ver más información" que lleva a un modal
* Modal de más informacion: muestra la informacion completa de la actividad, incluye el tituno que es el nombre, la fecha en formato extentido, el enlace a la actividad, su descripción, entre otros
* Footer: muestra los detalles descritos en del componente footer

### Codigo
Importa los componentes ComponentFixture y TestBed desde la API Core de Angular y específicamente de testo
``` ts
    import { ComponentFixture, TestBed } from '@angular/core/testing';
``` 

Importa el componente del Home
``` ts
import { HomeComponent } from './home.component';
``` 

``` ts
describe('HomeComponent', () => {
    //codigos siguientes
});
``` 

Se define un atribito de llamada componente de tipo HomeComponent y se define otro atributo llanado fixure de tipo ComponentFixture del enterior HomeComponent
``` ts
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
``` 

``` ts
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });
``` 

``` ts
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
``` 

``` ts
  it('should create', () => {
    expect(component).toBeTruthy();
  });
``` 
