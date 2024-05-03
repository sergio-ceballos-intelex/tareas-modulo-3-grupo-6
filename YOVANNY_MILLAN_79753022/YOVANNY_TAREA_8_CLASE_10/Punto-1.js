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
  return new Promise((resolve) => {
    setTimeout(() => {
      const person = persons.find(person => person.personId === user.personId);
      resolve(person);
    }, 5000);
  });
}

getUsers()
  .then(usersData => {
    const personPromises = usersData.map(user => getPerson(user));
    return Promise.all(personPromises);
  })
  .then(personsLoggued => {
    console.log('Personas logueadas:', personsLoggued);
  })
  .catch(error => {
    console.error('Error:', error);
  });