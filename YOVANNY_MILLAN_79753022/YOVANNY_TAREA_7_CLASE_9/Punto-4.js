const Ruta1 = () => console.log('Me encuentro en Madrid');
const Ruta2= (callback) => {
    setTimeout(() => {
        console.log('Esperando en Alemania');
        callback();
    }, 3000);
};
const Ruta3 = (callback) => {
    setTimeout(() => {
        console.log('Viajando a Corea');
        callback();
    }, 4000);
};
const Ruta4 = () => {
    setTimeout(() => {
        console.log('Me encuentro en Corea');
    }, 8000);
};
Ruta1();
Ruta2(() => {
    Ruta3(() => {
        Ruta4();
    });
});