# Harry Potter characters

Este es un proyecto de evaluación de React, donde construimos una SAP que muestra un listado de resultados a partir de una petición a una API y utilizando una combinación de fitros. Luego muestra estos resultados de forma individual en una página de detalle.


## Funcionalidades

### Listado de personajes de Harry Potter
Se realiza una llamada a [esta API](https://hp-api.onrender.com/api/characters) y se renderizan los personajes. El usuario verá un listado de tarjetas con una foto de personaje (o una imagen tipo si no existiera), su nombre y su especie.
Los personajes se ordenan alfabéticamente.

### Filtrado de personajes
#### Filtro por nombre
El usuario escribe en el campo y se actualizan los resultados a medida que lo hace. Si no se encuentran resultados, se muestra un mensaje.

#### Filtro por casa
Mediante un selector, se escogen entre cuatro opciones y se actualiza el listado. Por defecto, se muestran los resultados de la casa Gryffindor.

### Reseteo del formulario
Al hacer clic en el botón de Reset, se limpian los resultados del formulario y se retorna a su estado inicial.

### Página de detalle de personaje
Al hacer clic en una tarjeta del listado, se carga una página donde se muestra más información del personaje, como su género, apodos (si los tuviera) o el emblema correspondiente a su casa.
Hay un enlace para volver al listado principal. Al regresar, se mantiene en el input de búsqueda por nombre lo que el usuario escribió.

### Página de no encontrado
Si el usuario accede a una ruta que no existe, se muestra una página con un 404, con un botón para regresar al listado.

### Rutas compatibles
Si el usuario refresca la página de detalle o la introduce a mano, se cargan los detalles.

## Tecnologías utilizadas

* React: el proyecto está desarrollador utilizando esta librería y sus características: estructura por componentes, props y liftings, varios hooks, Router y PropTypes.

* Sass: para aplicar el estilo. Estructurado en componentes y con hojas de reset y variables.


## Instalación y uso
```
git clone https://github.com/Adalab/modulo-3-evaluacion-final-radiofiambre.git
cd modulo-3-evaluacion-final-radiofiambre
npm install
npm run dev
```