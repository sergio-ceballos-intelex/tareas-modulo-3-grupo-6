const salidaBogota = () => console.log('inicia viaje....');
const llegadaMadrid = (callback) => {
    setTimeout(() => {
        console.log('salida a Alemania....');
        callback();
    }, 3000);
};

const llegadaAlemania = (callback) => {
    setTimeout(() =>{
        console.log('Salida a Corea.....');
        callback();
    }, 4000);
};

const vueloACorea = (callback) => {
    setTimeout(() => {
        console.log('viajando a Corea ...');
        callback();
    }, 8000);
};
    

const llegadaACorea = () => console.log('llegada a Corea..');

salidaBogota();
llegadaMadrid(() => {
    llegadaAlemania(() => {
        vueloACorea(() => {
            llegadaACorea();
        });
    });
});
