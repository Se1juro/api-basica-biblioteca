# Como correr la API

1. Clona el respositorio y situate dentro de el
2. npm install
3. npm run dev o npm start
4. La api corre en el puerto 3000.
5. Los end points son:
  - /api/users
  - /api/books
  - /api/rental
6. Podras crear, consultar, editar y eliminar tanto usuarios como libros.
7. Los libros cuentan con un solo ejemplar, esto solo se valida con el nombre
8. Se pueden rentar un libro, si un libro ya esta rentado, otro usuario no podra rentarlo

# Instrucciones de los endpoint

## Usuarios

- POST: Recibe un json con dos campos, username y password. No hay restricciones en estos cambos, solo no deben estar vacios.
- GET: Lista todos los usuarios con una paginación de 10 items como maximo. Para cambiar de pagina, debe pasarse en la query los query de page y limit si quieres cmabiar de 10 a otro numero
- GET/id: Muestra el usuario asociado con ese id
- PUT/id: recibe un id de un usuario como parametro en la url y un json en el body, el cual solo acepta un valor, el username.
- DELETE/id: Recibe un parametro id en la URL y te permitira borrar un usuario

## Libros

- POST: Recibe un JSON con 3 campos, name, description y author.
- GET: Lista de la misma manera como en los usuarios, pero en este caso los libros.
- GET/id: Mismo funcionamiento de el get/id de los usuarios
- PUT/id:Recibe un id como parametro en la URL y un JSON con los campos que quieras actualizar. (name, description o author)
- DELETE/id: Recibe un parametro id en la URL y te permitira borrar un libro

## Prestamos

- POST: Recibe un JSON con dos campos, idUser y idBook, estos campos se validaran, si no existe el usuario, no podras hacer prestamos, si no existe el libro, no podras hacer prestamos.
En caso de que el libro ya este en prestamos, tampoco se te permitira completar la petición
- DELETE/id: Recibe la id de un prestamo y lo elimina
- GET: Puedes listar de la misma forma que en los endpoints anteriores
- GET/id: Lista los datos de un prestamos en especifico.
