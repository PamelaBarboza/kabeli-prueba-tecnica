# CRUD React Hooks
**APP MANTENEDOR DE USUARIOS**

![app terminada](https://user-images.githubusercontent.com/66397527/146976303-ca647f75-fdb3-4308-9111-58dcaf235119.jpg)
Me basé en el siguiente ejemplo:
https://www.taniarascia.com/crud-app-in-react-with-hooks/

La aplicación enlista, agregar, elimina y modifica.


## Diagrama de Solución
![diagrama de solucion](https://user-images.githubusercontent.com/66397527/146973799-468edb29-76fc-4f9d-b85f-efd9f4f3c0ef.jpeg)


## Configuraciones iniciales

npx create-react-app react-hooks

Eliminé todos los archivos a expcepción de 

* app.js
* index.css
* index.js

## Instalaciones adicionales

npm install react-hook-form

npm install uuid

## Configuracion de Stylos

Se elimino los datos que estaban en el index.css y los reemplace por estos:
https://taniarascia.github.io/primitive/css/main.css


## Configuracion de vista

![ScreenShot](https://user-images.githubusercontent.com/66397527/146968163-90e115c3-7692-4e08-81f4-9d6ab7384cc1.jpg)

## Creación del componente
src/components/UserTable.jsx
UserTable.jsx

Importamos React,
y exportamos default UserTable.

![ScreenShot](https://user-images.githubusercontent.com/66397527/146970493-de6e8b48-ac8a-403c-8bea-a7f214573142.jpg)

Luego importamos y agregamos el componente a App.jsx
Luego iteramos los datos.

Luego traemos los datos del Json  e importamos el useState en React
![app js](https://user-images.githubusercontent.com/66397527/146971487-9bdf51dc-4b92-4669-9317-d502f6198877.jpg)

Los accesorios funcionan igual que antes. Mapearemos los datos de usuario que enviamos y mostraremos las propiedades de cada usuario, o mostraremos un mensaje si no hay usuarios. Los botones de Modificar y eliminar aún no están conectados a nada, por lo que no harán nada.

![usuario](https://user-images.githubusercontent.com/66397527/146972277-f1408f47-69d1-4fa3-a1da-7e61b65f2f60.jpg)

Realizamos los estados en App.jsx, tambien lo pasamos como props en UserTable={users} y luego en UserTable.jsx esta recibiendo el props y luego lo comenzamos a iterar.

![iterar](https://user-images.githubusercontent.com/66397527/146973141-d35d1979-874b-46bc-aeb2-16f6fb260c79.jpg)

Para generar un iD solamente necesitamos una funcion: 
uuidv4() y lo reemplazamos en el  ID.


## Agregar un nuevo usuario

configurar el formulario para agregar un nuevo usuario.