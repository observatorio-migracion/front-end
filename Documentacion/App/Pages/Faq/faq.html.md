# Documentación contact-us.html

### Esta sección contiene la documentación del contact-us.html de la pagina contact-us de la página web. Dentro de su estructura visual posee: 
* Preguntas frecuentes que se pueden tener de la aplicacion
* 
### Código


La etiqueta **div** con la clase *container* guarda todo el contenido de la pagina.
```html
<div class="container">
  ...
</div>
```

Las multiples etiquetas **h1**, **h3** y **div** almacenan el contenido en texto de la pagina.
```html
<h1>Preguntas Frecuentes</h1>
<br />
<div class="faq-container" *ngFor="let question of faqList">
  <br />
  <h3>{{ question.pregunta }}</h3>
  <div class="faq-html-container" [innerHTML]="question.contenido"></div>
</div>
```