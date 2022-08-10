# Documentación faq.ts

### Esta sección contiene la documentación del faq.ts de la pagina faq de la página web. Dentro de su estructura visual posee: 
* Preguntas frecuentes que se pueden tener de la aplicacion
* 
### Código

Importa los componentes
``` ts
import { Component, OnInit, SecurityContext, HostListener } from '@angular/core';
import { ShowdownConverter } from 'ngx-showdown';
import { DomSanitizer } from '@angular/platform-browser';
import { Question } from 'src/app/models/Question';
import { FaqService } from 'src/app/services/faq.service';
import { environment } from 'src/environments/environment';
``` 

Agrega un componente *selector* de CSS llamado *app-faq*, que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, se agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para utilizar en este componente.
``` ts
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
``` 

Exporta la clase FAQComponent para ser usada en otras instancias
``` ts
export class FAQComponent implements OnInit {
  // codigos siguientes
}
``` 

Para la clase *FAQComponent* se crean los atributos: *scrolled*, *url* y *faqList*
``` ts
  faqList: Question[];
  url: string;
  public scrolled: boolean;
``` 

La clase *FAQComponent* recibe como parametros los servicios necesarios para sus funciones y inicializa sus variables
``` ts
constructor(
  private faqService: FaqService,
  private showdownConverter: ShowdownConverter,
  private sanitizer: DomSanitizer
) {
  this.faqList = [];
  this.url = environment.main.url;
  this.scrolled = false;
}
``` 

Este método de la clase *FAQComponent*, hace un llamado al componente y lo inicia.
``` ts
ngOnInit(): void {
  this.loadFAQs();
}
``` 

Este método de la clase *FAQComponent*, reacciona cada vez que se scrollea en la pantalla
``` ts
@HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY >= 150;
  }
```

Este método de la clase *FAQComponent*, carga las preguntas para ser mostradas en la pagina
``` ts
loadFAQs() {
  this.faqService.getQuestionList().subscribe((question: Question[]) => {
    for (const faq of question) {
      if (faq?.contenido) {
        const verifiedContent = this.verifyFaqContent(faq.contenido);

        if (verifiedContent !== '') {
          faq.contenido = verifiedContent;
          this.faqList.push(faq);
          this.faqList.sort((a, b) => a.order - b.order);
        }
      }
    }
  });
}
```

Este método de la clase *FAQComponent*, convierte las preguntas a formato html
``` ts
verifyFaqContent(value: string): string {
  const htmlConverted = this.markDowntoHtml(value);
  return this.sanitizer.sanitize(SecurityContext.HTML, htmlConverted) || '';
}
```

Este método de la clase *FAQComponent*, convierte un archivo markdown a html
``` ts
  markDowntoHtml(text: string): string {
    let html = this.showdownConverter.makeHtml(text);
    let aux = '';
    while (aux !== html) {
      aux = html;
      html = html.replace('href="/post/', `href="${this.url}/post/`);
    }
    return html;
  }
```