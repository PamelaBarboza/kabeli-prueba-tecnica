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

Hook para formulario:   
npm install react-hook-form

Para generar ID:  
npm install uuid

## Configuracion de Stylos

Se elimino los datos que estaban en el index.css y los reemplace por estos:
https://taniarascia.github.io/primitive/css/main.css


## Configuracion de vista

En app.js configuramos la vista
![ScreenShot](https://user-images.githubusercontent.com/66397527/146968163-90e115c3-7692-4e08-81f4-9d6ab7384cc1.jpg)

## Creación del componente
src/components/UserTable.jsx
UserTable.jsx

Importamos React,
y exportamos default UserTable.

![ScreenShot](https://user-images.githubusercontent.com/66397527/146970493-de6e8b48-ac8a-403c-8bea-a7f214573142.jpg)

Luego importamos y agregamos el componente a App.jsx
Luego iteramos los datos.

Luego traemos los datos  e importamos el useState en React

Antes del return realizamos una constante con un array de objetos que tiene la propiedad ID, name, email, password, y phone.

Para utilizar el State, llamo a una constante abro corchetes paso un nombre que se va a llamar users porque es un array y tambien a setUsers [user, setUsers] al lado utilizo el useState y se realiza la importacion automaticamente. Abrimos parentesis pasamos toda la información inicial quedaria asi:



const [users, setUsers] = useState(usersData);

Con esto tendremos un estado que ya tiene información adicional.

Pasamos al componente UserTable llamamos a los props, luego pinto en un console.log los props.users con eso podemos ver la información del objeto

![app js](https://user-images.githubusercontent.com/66397527/146971487-9bdf51dc-4b92-4669-9317-d502f6198877.jpg)

Mapearemos los datos de usuario que enviamos y mostraremos las propiedades de cada usuario, o mostraremos un mensaje si no hay usuarios. Los botones de Modificar y eliminar aún no están conectados a nada, por lo que no harán nada.

![iterar](https://user-images.githubusercontent.com/66397527/146973141-d35d1979-874b-46bc-aeb2-16f6fb260c79.jpg)

![usuario](https://user-images.githubusercontent.com/66397527/146972277-f1408f47-69d1-4fa3-a1da-7e61b65f2f60.jpg)

Realizamos los estados en App.jsx, tambien lo pasamos como props en UserTable={users} y luego en UserTable.jsx esta recibiendo el props y luego lo comenzamos a iterar.


Para generar un iD solamente necesitamos una funcion: 
uuidv4() y lo reemplazamos en el  ID.


## Agregar un nuevo usuario

Creamos la funcion de agregar un nuevo usuario: 

Vamos al App.js y agregamos una constante que se llama addUsers que sera igual a una función de flecha recibe como parametro un usuario y vamos a generar el user.id que sera igual al Id que colocamos más arriba user.id = uuidv4().

Ese nuevo usuario va a recibir toda la data, aqui va a venir lo que el cliente escriba en un formulario: el nombre, email, password y phone, por este lado le agregamos un ID, una vez que ese ID este colocado, utilizo el setUsers([...users, user]) abro parentesis, luego las llaves agrego el array y antes coloco los tres puntos que sirve para hacer la copia de los usuarios y mando el usuario nuevo y esta información la trae de un nuevo componente llamado addUserForm, ese componente lo agregamos en app.js debajo del h3 Agregar usuarios y se realiza la importacion del nuevo componente.


Componente: AddUserForm

Configurar el formulario para agregar un nuevo usuario. 

Const AddUserForm = (props) => {

![formulario](https://user-images.githubusercontent.com/66397527/147101373-5ae1296b-1f04-4846-b8cf-0a83011342d4.jpg)
}

Los props enviamos el AddUser
Entonces en el app.js agregamos un nuevo props de esta manera:

![nuevo props](https://user-images.githubusercontent.com/66397527/147101745-55b7f4ba-d10b-41a6-b301-d410f7fdac3d.jpg)

Generaba un error cuando se mostraba en la web pero era por el value dentro del form, lo quito y se soluciono.

En esta parte use el React Hook Form.
en el componente AddUserForm llamamos en la importacion al UseForm.

Aqui realizo el State.
![state](https://user-images.githubusercontent.com/66397527/147102472-d15e46f2-930f-4726-94a0-b8e1aa1c5d1b.jpg)

En el form uso el register, donde si agrego el requerido paso el value como true y se agrega el mensaje de "campo requerido" también agregue dentro de unos divs los mensajes de errores.
Para limpiar el campo utilice e.target.reset();

Llamo props.addUser(data) y envio la data. y se pinta en la pantalla en la lista de usuarios.

![adduser](https://user-images.githubusercontent.com/66397527/147103889-b8080e0a-75de-4549-8ecf-ec421de328e4.jpg)

Hubo un problema que no supe reparar a la hora de agregar el nro de telefono, hay dos puntos que tengo que seguir trabajando uno es que no supe manipular el objeto que figura en phone con el contrycode citycode y number en donde si agrego el nro del telefono no se agrega en la lista de usuarios y a su vez si le doy modificar aparece en la lista de editar como NaN que es porque no converti el string a number con ParceInt, por falta de tiempo me quedo pendiente reparar esos puntos, pero seguire trabajando hasta resolverlos.

## Eliminar Usuarios


const delete User = (id) {}

En el App.js creo la funcion que recibe un ID el nombre de la constante lo paso al boton de "eliminar" que esta en el componente UserTable y lo paso como props, de esta forma:

![eliminar](https://user-images.githubusercontent.com/66397527/147107331-76d74b08-6e77-4e52-b7fa-f43dbb2e905e.jpg)

Para eliminar uso setUsers, filtro todos los usuarios, abro parentesis, utilizo un parametro en este caso el usuario y hace un recorrido por todos los usuarios, hago una pregunta si el user.id es distinto al id que estamos enviando que lo guarde dentro de este filter (user.filter), cuando el id sea igual a ese id lo va a excluir, entonces solo estoy filtrando todo ID que sea distinto al id que estamos pasando como parámetro.


## Editar Usuarios

Cree el componente llamado EditUserForm.jsx será muy similar al AddUserForm, incluso copie el codigo de ese componente y lo traje al EditUserForm y reemplace los nombres. Porque hago dos iguales? porque cuando apreten el boton de edit el formulario de agregar se tiene que eliminar y aparecer el formulario de editar, podria haber reutilizado el componente pero para hacerlo más sencillo lo utilice con el Edit.

Elimino la función de agregar usuario, utilizo los mismos campos: name, email, password y phone, los errores pero en el boton de agregar lo cambio por editar usuario. En el App llamo al componente y hacemos la importacion.

Para llamar al EditUser, tenemos que preguntar donde se pinta el agregar usuario, antes de eso primero lo pinto. De esta manera:

![edit](https://user-images.githubusercontent.com/66397527/147109636-625a30ac-9e36-40f6-90ef-fed0b3523c08.jpg)

De esta manera si vemos en la web deberia aparecer los dos formularios, uno que dice agregar y otro que dice editar.

Ahora hacemos hacemos el state con un verdadero y falso para pintar un formulario o el otro:

const [editing, setEditing] = useState(false);

El estado va a estar en false para pintar un formulario o el otro. 

editing ? EditUserForm : AddUserForm

hacemos la pregunta: si editing es verdadero pintemos dentro de un div el EditUserForm caso contrario pintamos el AddUserForm.
Luego pasamos el SetEditing en el UserTable como props y donde manejamos ese evento, en el boton de editar con onclick:{() {props.setEditing(true)}}

![setediting](https://user-images.githubusercontent.com/66397527/147111273-b8e83c97-a8b2-4788-9965-aaed39809595.jpg)

![propssetediting](https://user-images.githubusercontent.com/66397527/147111429-de6038f3-67c7-4b85-a512-102533744f37.jpg)

Si vemos en la web aparece el form agregar y si apretamos editar se cambia el formulario a editar.

Ahora hay que hacer otro estado para el currentUser, este basicamente sera nuestro usuario que ya viene editado, vamos hacer un estado porque el usuario lo va a modificar por lo tanto hacemos un state:

Este state tendra por defecto lo sera el ID en nulo, el nombre en un string vacio y el resto de los datos de la misma manera.

![currentuser](https://user-images.githubusercontent.com/66397527/147112042-9215f038-7692-426a-816e-f1af2d882af7.jpg)

Es decir va a empezar como un objeto con las propiedades de nuestro usuario pero vacio, porque tenemos que capturarlo de nuestra tabla y para pintarlo dentro del formulario.

Aquí creo otra función que se llame editRow donde recibe un usuario vamos a recibir el que vamos a modificar en esta función, utilizamos el setCurrentUser abrimos el objeto y vamos a recibir un usuario id que efectivamente sera su id, tendra un name que viene de user.name y el resto de los usuarios de la misma manera..

![setCurrent](https://user-images.githubusercontent.com/66397527/147117057-e301fad8-2f02-4270-a127-bb87733546b2.jpg)

En app.ls el editRow lo pasamos a la tabla UserTable como un props, luego vamos al componente UserTable y nos dirigimos el onclick y vamos a reemplazar el {props.setEditing(true)} por el {props.editRow(user)} que esta recibiendo ese usuario entonces el setEditing que pasamos en App.js lo eliminamos porque lo vamos a llebar adentro de la constante editRow como setEditing(true).


![borrarsetediting](https://user-images.githubusercontent.com/66397527/147117912-e5e64341-6441-4ae1-84b2-656d056555b3.jpg)

![editRowsetediting](https://user-images.githubusercontent.com/66397527/147118168-00b50d0b-627d-42d2-ac44-67032b914443.jpg)


No lo hice en el boton directamente porque voy a usar el editRow, ahora ya tenemos este editRow que esta haciendo que el currentUser tenga la información de este usuario, lo copiamos y lo llevamos al componente que debemos pintar aqui que seria el nombre y el username.

Como estamos utilizando react hook form tenemos la posibilidad de empezar con datos y dentro del useForm abrimos llaves y pasamos una propiedad que es defaultValues: eso va a recibir los valores por defecto que va a tener nuestro formulario en este caso los inputs.

![defaultvalue](https://user-images.githubusercontent.com/66397527/147120235-89281d4a-7352-4a07-96e2-8b16c48f0410.jpg)

ahora nos falta agregar los setValue que van a ir detectando que el campo name si cambie nosotros coloquemos lo que es el props.currentUser.name

![setvalue](https://user-images.githubusercontent.com/66397527/147120519-6ad3cfdb-2689-475c-8335-160ff0d88d88.jpg)

Ahora quedaria que cada vez que apretamos el boton de editar se actualicen los datos para eso vamos al app.js y hacemos una nueva funcion que se dedique a actualizar.
va a recibir un id y un updateUser, que va ser el usuario nuevo, actualizado.
vamos a pasar al formulario de agregar porque ya hicimos la modificación.

y ahora que tenemos el setUsers que es todo nuestro array tambien lo vamos a utilizar porque tenemos que hacer un recorrido de los usuarios.map donde por cada uno de los usuarios vamos hacer la siguiente pregunta si el user.id es igual al id que estamos pasando en el updateUser entonces pintame el usuario actualizado, caso contrario sigue pintandome el usuario.

![updateUser](https://user-images.githubusercontent.com/66397527/147121396-5954310a-7885-4db3-830c-3a27abb69639.jpg)

Ahora el updateUser tenemos que utilizarlo en el boton de editar por lo tanto en el boton de EdiUserForm lo pasamos como props.

![botonupdate](https://user-images.githubusercontent.com/66397527/147122191-474e5308-6461-4002-b7a9-e0f6293cd12d.jpg)

Luego vamos al componente EditUserForm donde tenemos el onSumit lo vamos a utilizar.

el updateUser viene como props que recibe un id props.currentUser.id y el segundo parametro es toda la data.

(la data es lo que viene de los inputs y el id es el que estamos recibiendo cada vez que presionamos modificar) 

![props currentUser id](https://user-images.githubusercontent.com/66397527/147122716-65ea8bea-a07f-412f-aa75-d8ef76be1073.jpg)

Por último  agregamos data.id que sera igual de lo que viene del currentUser.


Con esto realizamos el CRUD donde podemos eliminar, listar, editar y agregar nuevos usuarios utilizando react hook.

*Como mencione anteriormente seguire trabajando en los errores que la app trae con respecto a los nros telefonicos. Gracias

Link: https://kabeli-prueba-tecnica.netlify.app/