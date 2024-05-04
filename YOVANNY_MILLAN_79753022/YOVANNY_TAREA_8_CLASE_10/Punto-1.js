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
      if (isLogged){
        resolve(users);
      }else{
        reject("No estás logueado dentro de la APP")
      }
      
    }, 2000);
  });
}

function getPerson(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(person => person.personId === user.personId);
      if (person)
      {
        resolve(person);
      }else{
        reject("Persona no existe");
      }
    }, 5000);
  });
}

getUsers()
  .then(usersData => {
    const personPromises = usersData.map(user => getPerson(user));
    return Promise.allSettled(personPromises);
  })
  .then(personsLoggued => {
    const imprimir=personsLoggued
    .filter(info=>info.status!=="rejected")
    .map(info=>info.value);
    console.log('Personas logueadas:', imprimir);
  })
  .catch(error => {
    console.error('Error:', error);
  });