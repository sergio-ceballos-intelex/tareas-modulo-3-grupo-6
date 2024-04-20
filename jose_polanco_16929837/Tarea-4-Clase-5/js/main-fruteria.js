let product = {
    name: "Manzana",
    weight: 180,
    units: 30
};

const kilo = 0.001;
let kiloWeight = 0;

const buyProduct = (name, weightPro, units) => {
    
    console.log("Entro1", weightPro);
    console.log("Entro2", units);

    kiloWeight = ((units*weightPro)*kilo);
    console.log("Entro3", kiloWeight);

    if(kiloWeight <= 2){
        console.log("El descuento es: 0");
    }else if(kiloWeight > 2 && kiloWeight <= 5){
        console.log("El descuento es: 10%");
    }else if(kiloWeight > 5 && kiloWeight <= 10){
        console.log("El descuento es: 15%");
    }else(kiloWeight > 10){
        console.log("El descuento es: 20%");
    }
}


console.log(buyProduct(product.name, product.weight,product.units)); 