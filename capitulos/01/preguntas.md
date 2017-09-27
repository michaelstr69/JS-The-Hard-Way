## Qué es JavaScript?
Es un lenguaje de programacion basado en prototipos, dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa
donde su mayor implementacion esta en las paginas web permitiendo mejorar la interfaz del usuario y las paginas web dinamicas.

## Qué es Node.js?
Es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

## Cuál es la diferencia entre correr JavaScript en un navegador o en Node?
La mayoría del código JavaScript no se ejecuta en un navegador sino en el servidor, y aqui es donde node nos ayuda con su entorno de
depuración interactiva.

## Qué es un sistema de versionamiento (VCS). 
Son herramientas que nos sirven para controlar la administración de las distintas versiones del código fuente, sin embargo, los mismos conceptos son aplicables a otros ámbitos como documentos, imágenes, sitios web, etc.

## Cuáles son las ventajas de usar uno? 
El tener un registro de las acciones realizadas con cada elemento o conjunto de elementos.

## Qué es git y cómo se diferencia de los demás VCS?
Es un VCS diseñado por Linus Torvalds.
Diferencias
Configuración del repositorio 

Git almacena el repositorio en .git directorio .git en .git directorio superior de su proyecto; CVS requiere configurar CVSROOT, un lugar central para almacenar información de control de versión para diferentes proyectos (módulos). La consecuencia de ese diseño para el usuario es que la importación de fuentes existentes en el control de versiones es tan simple como "git init && git add. && git commit" en Git, mientras que es más complicado en CVS.
 Operaciones atómicas . Debido a que CVS al principio era un conjunto de scripts alrededor del sistema de control de versiones RCS por archivo, commits (y otras operaciones) no son atómicos en CVS; si una operación en el repositorio se interrumpe en el medio, el repositorio se puede dejar en un estado inconsistente. En Git todas las operaciones son atómicas: o tienen éxito en su totalidad, o fallan sin ningún cambio.
Conjuntos de cambios . Los cambios en CVS son por archivo, mientras que los cambios (commit) en Git siempre se refieren a todo el proyecto.
