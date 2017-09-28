## Qué es JavaScript?
Es un lenguaje de programacion basado en prototipos, dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa. donde su mayor implementacion esta en las paginas web permitiendo mejorar la interfaz del usuario y las paginas web dinamicas.
Basado en prototipos.- debido a que objetos no son creados mediante la instancia de clases sino mediante la clonación de otros objetos o mediante la escritura de código por parte del programador. De esta forma los objetos ya existentes pueden servir de prototipos para los que el programador necesite crear.
Es un lenguaje dinámico debido a que las operaciones realizadas en tiempo de compilación pueden realizarse en tiempo de ejecución. Por ejemplo, en JavaScript es posible cambiar el tipo de una variable o agregar nuevas propiedades o métodos a un objeto mientras el programa está en ejecución.
Imperativos puesto que son un conjunto de instrucciones que le indican al computador cómo realizar una tarea, ejemplo: un protocolo le dice qué hacer al interlocutor (pasos a seguir).
POO.- es una forma especial de programar, más cercana a como expresaríamos las cosas en la vida real, por lo cual vamos a escribir nuestros programas en términos de objetos, propiedades, métodos, entre otros, un ejemplo de objeto:
Un carro sería el objeto, las propiedades serían las características como el color o el modelo y los métodos serían las funcionalidades asociadas como ponerse en marcha o parar.
La programación funcional esta basada en el uso de funciones matemáticas por los valores generados por una función depende exclusivamente de los argumentos alimentados a la función, lo cual hace al sistema más predecible.

Donde su mayor implementacion esta en las paginas web permitiendo mejorar la interfaz del usuario y las paginas web dinamicas debido a que se utiliza principalmente del lado del cliente (es decir, se ejecuta en nuestro ordenador, no en el servidor) permitiendo crear efectos atractivos y dinámicos en las páginas web.

Surgió de la necesidad de tener un lenguaje de programación que se ejecutara en el navegador del usuario debido a que las velocidades de navegación eran extremadamente lentas, y con la aparición de las primeros formularios y aplicaciones web necesitaban optimizar la validación de datos antes de realizar la conexión cliente-servidor.

## Qué es Node.js?
Es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. 
E/S sin bloqueo.- porque node no se quedara en un punto muerto durante la ejecucion, debido a que sino existen mas callback saldra automaticamente y asi mismo durante el inicio de ejecucion.
La creación de nodejs se da para evitar la crecaion de hilos OS que consumen la memoria de nuestro servidor y los reemplaza por eventos en la ejecución.
La depuracion interactiva no se como explicarlo creo k debo usarlo primero, pero creo k es similar a lo que ofrece el navegador al ejecutar javascript.
## Cuál es la diferencia entre correr JavaScript en un navegador o en Node?
Nodejs esta orientado a la creación del servidor por lo tanto existe codigo que no podra ejecutarse en el navegador.

## Qué es un sistema de versionamiento (VCS). 
Son herramientas que nos sirven para controlar la administración de las distintas versiones del código fuente, sin embargo, los mismos conceptos son aplicables a otros ámbitos como documentos, imágenes, sitios web, etc.

## Cuáles son las ventajas de usar uno? 
El tener un registro de las acciones realizadas con cada elemento o conjunto de elementos.
La ventaja del registro es que nos permite observar el progreso de nuestro programa, asi como los cambios que hemos realizado.

## Qué es git y cómo se diferencia de los demás VCS?
Git es un VCS diseñado por Linus Torvalds.
Diferencias
Git almacena el repositorio en .git directorio lo que facilita importación de fuentes existentes en el control de versiones.
Operaciones atómicas.- lo cual implica que se las acciones tienen éxito en su totalidad o fallan sin ningún cambio.
Conjuntos de cambios.- los cambios en CVS son por archivo, mientras que los cambios (commit) en Git siempre se refieren a todo el proyecto.
