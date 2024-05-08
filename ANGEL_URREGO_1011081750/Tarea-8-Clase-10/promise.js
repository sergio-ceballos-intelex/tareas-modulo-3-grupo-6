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
                reject('No estas logueado dentro de la app')
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
    .then(users => {
        const promiseUsers = users.map(user => getPerson(user));
        return Promise.all(promiseUsers);
    })
    .then(persons => console.log(persons.filter(person => person)))
    .catch("Fallido");
    