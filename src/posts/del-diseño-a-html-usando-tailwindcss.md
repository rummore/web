---
date: 2020-05-13T15:11:03.067Z
title: Del diseño a HTML usando TailwindCss
featuredimage: /assets/featuredimgtailwindcss.png
---
Una de las cosas del diseño web que considero más tediosa es manejar el css pues hay tantas cosas que aplicar que a veces tardo más escribiendo css que buscando inspiración y diseñando el sitio web.

Lo bueno de este mundo es que también contamos con herramientas como Bootstrap, Materialize, Bulma entre otras, que nos recortan ese tedioso camino, pero no es que nos diseña el sitio tal cual como lo tenemos en las imágenes que le enviamos al cliente.

El problema de usar estas herramientas es que al entrar a un sitio web sabes qué framework de css está usando, no es nada malo tampoco sino que pareciera que esas páginas contrataron al mismo diseñador y no es así, quizás un 80% de los desarrolladores web usan /usamos uno de estos populares frameworks para agilizar tiempo de desarrollo.

Desde 2019 ha llegado un nuevo framework llamado TailwindCss, que hace casi lo mismo que los anteriores nombrados, sólo que nosotros tenemos elegimos el estilo que queremos y no viene impuesto, es decir, si queremos hacer un Card como el de bootstrap lo armamos nosotros con las clases que nos da, nosotros elegimos tamaño, color, padding, etc.

Este post es sólo una introducción a una pequeña colección de videos que iré montando en mi canal de youtube para mostrar cómo pasé el diseño que ven aquí abajo (muy sencillo), a un html para mostrar la información más básica del cliente pues así lo quieren.

![alexei garban tailwindcss ](/assets/nimpartsscreenshot.png "alexei garban tailwindcss ")

# **Comencemos**

Primero tenemos que tener la carpeta donde vamos a trabajar nuestro proyecto. Luego creamos un proyecto npm con:

`npm init -y`

Uso " -y " para agilizar un poco el proceso pero pueden hacerlo sólo con npm init.

Luego  con esto creado escribimos 

`# Con npm `

`npm install tailwindcss`

`# Con Yarn `

`yarn add tailwindcss`

Esto nos agrega la carpeta node_modules en nuestro proyecto y podemos abrir la carpeta con nuestro editor, luego crear un index.html y un archivo.css (en mi caso me voy por lo convencional y creo un style.css)

Agregar style.css al head del index.html

En tu archivo .css coloca lo siguiente al inicio:

`@tailwind base;`

`@tailwind components;`

`@tailwind utilities;`

Esto agrega o inyecta tailwind a tu css.

Usando el CLI de Tailwind puedes hacer lo siguiente para procesar tu CSS:

`npx tailwindcss build styles.css -o output.css`

Y con este ya tenemos TailwindCss listo para comenzar a usar en nuestro proyecto.

Si no te gusta leer y prefieres ver (como yo), te dejo el video de mi canal de youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/aGkf0j5DZKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#
