---
date: 2020-07-15T13:19:23.170Z
title: GatsbyJs y ContextApi (manejo de estado)
featuredimage: /assets/gatsby-wordpress-migrate.jpg
---
He visto varios tutoriales (todos en inglés por ahora) de como usar ContextApi para el manejo de estado en GatsbyJs y honestamente los veo un poco confuso pues el ejemplo (usan el mismo todos) no es tan fácil de ver a primera vista.

He encontrado una manera que creo es sencilla y aquí lo explico.

**Comencemos creando el proyecto:**

```
gatsby new contextapi
```

Una vez creado nuestro proyecto creamos un archivo llamado CartContext.Js (voy a hacer un ejemplo como si tenemos un shopping cart, nada de complicado, sólo agregar algo a un estado y ya).

Incluimos el siguiente código en CartContext.Js

> import React, {useState, createContext} from 'react';
>
> export const CartContext = createContext();
>
> const CartProvider = (props)=> {
>
> \    const \[cart,setCart] = useState(\[]);
>
> \    return(
>
> \    <CartContext.Provider value={\[cart,setCart]}>
>
> \    {props.children}
>
> \    </CartContext.Provider>
>
> \    )
>
> }
>
> export default CartContext
>
> export { CartProvider }



Lo que estamos haciendo es crear el contexto de Cart, creando su estado inicial, en este caso un array vacío y un Provider con el valor de un array \[cart,setCart].



Ahora en el archivo gatsby-browser.js incluimos lo siguiente:



```
import {CartProvider} from './src/components/CartContext'
```

```

```

```
export const wrapRootElement = ({element}) => (
```

```
    <CartProvider>{element}</CartProvider>
```

```
)
```



Este código envuelve en el wrapRootElement (que es para envolver toda la app) nuestro CartProvider con un
