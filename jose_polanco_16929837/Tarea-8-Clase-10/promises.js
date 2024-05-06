
/*
Hacer un programa que simule una peticion a un servidor, con delay de 2000 ms, 
donde obtenga una informacion de usuarios. Si el usuario esta logueado 
(isLogged) la promesa se resueve con los usuarios (users), si no se rechaza 
un mensaje diciendo "No estas logueado dentro de la app". 

Dentro de cada usuario 
hay una propiedad id de persona (personId) que servirá para obtener la informacion 
de cada persona, simulando otra peticion tambien con delay de 5000 ms que se resolvera 
con cada persona dentro de la lista persons.

Notas:

1. Usar Promise.all para la segunda peticion fake, es decir la que obtiene las personas, 
una vez se resuelva la primera (dentro del then).
2. La promesa de obtener personas debe recibir como parametro un usuario
*/

const isLogged = true;

const users = [
  {
    id: 1,
    role: 'USER',
    personId: 10
  },
  {
    id: 2,
    role: 'USER',
    personId: 11
  }
];

const persons = [
  {
    personId: 10,
    name: 'Rodrigo',
    lastname: 'Lopez'
  },
  {
    personId: 14,
    name: 'Jaime',
    lastname: 'Diaz'
  },
  {
    personId: 15,
    name: 'Leonardo',
    lastname: 'Benitez'
  },
];


function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogged) {
          resolve(users);
        } else {
          reject("No estás logueado dentro de la app");
        }
      }, 2000);
    });
  }
  
  function getPerson(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const person = persons.find(person => person.personId === user.personId);
        console.log("Respuesta getPerson: ", person);
        resolve(person);
      }, 5000);
    });
  }
  
  getUsers()
    .then((users) => {
      console.log("\nUsuarios obtenidos:\n", users);
      const promises = users.map(user => getPerson(user));
      return Promise.all(promises);
    })
    .then((persons) => {
      console.log("\nPersonas obtenidas:\n", persons);
    })
    .catch((error) => {
      console.error("Error:", error);
    });