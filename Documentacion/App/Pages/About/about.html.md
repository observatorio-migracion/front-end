# Documentación about.html

 Esta sección contiene la documentación del código .html del elemento about de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  Botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web en esta sección contiene notas sobre la agrupación que llevo a cabo el proyecto y alguna información extra.

### Código

Esta etiqueta **div** con las clases *container-fluid*, *px-md-5* y *custom-container* almacenan los componentes de esta pagina
``` html
<div class="container-fluid px-md-5 custom-container">
    ... 
</div>
```

Esta etiqueta **div** con las clases *row*, *custom-row* y *justify-content-center* almacenan los bloques de esta pagina
``` html
<div class="row custom-row justify-content-center" >   
    ...
</div>
```

Estas **div** contienen las imagenes y texto de las distintas filas de la pagina
``` html
<div class="col-md custom-col">
    <div class="image-container mx-auto">
    <img
        alt=""
        class="offset negative-offset-y negative-offset-x"
        src="../../../assets/images/ab1.jpg"
        width="500"
        height="335"
    />
    </div>
</div>
<div class="col-xl custom-col">
    <p>
    "La Organización Internacional para las Migraciones, define la migración como un término
    genérico que se “designa a toda persona que se traslada fuera de su lugar de residencia
    habitual, ya sea dentro de un país o a través de una frontera internacional, de manera
    temporal o permanente, y por diversas razones."
    </p>
</div>
```
Estas **div** contienen las imagenes y texto de las distintas filas de la pagina
``` html
<div class="col-xl custom-col">
    <div class="image-container mx-auto">
    <img
        class="offset positive-offset-y negative-offset-x"
        alt=""
        src="../../../assets/images/ab2.jpg"
        width="500"
        height="335"
    />
    </div>
</div>
<div class="col-xl order-xl-first custom-col">
    <p>
    Ante el contexto actual de migraciones, el Observatorio de Migración es una extensión del
    programa de Acción Social de la Universidad de Costa Rica, que busca brindar información a
    las personas migrantes, este proyecto surge con la idea de que cualquier persona pueda tener
    fácil acceso a una variedad de información verídica y fiable referida a la temática
    migratoria nacional e internacional, por medio de una página web que sea de un uso amigable
    para cualquier usuario interesado en conocer más sobre el tema migratorio en sus distintas
    vertientes temáticas.
    </p>
</div>
```

Estas **div** contienen las imagenes y texto de las distintas filas de la pagina
``` html
<div class="col-xl custom-col">
    <div class="image-container mx-auto">
    <img
        class="offset negative-offset-y positive-offset-x"
        alt=""
        src="../../../assets/images/ab3.jpg"
        width="500"
        height="335"
    />
    </div>
</div>
<div class="col-xl custom-col">
    <p>
    La meta principal del proyecto es simplificar información que facilite el acceso a servicios
    y al cumplimiento de trámites para las personas migrantes en Costa Rica, así como ofrecer
    información de interés para esta población. Asimismo, nuestra perspectiva está orientada a
    la solidaridad con quienes salen de su país por distintas razones, comunicando un mensaje a
    la población costarricense sobre la inclusión de las personas inmigrantes en la sociedad que
    los acoge y de generar una convivencia intercultural solidaria.
    </p>
</div>
</div>
```