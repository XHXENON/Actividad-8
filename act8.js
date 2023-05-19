//- Una función sin parámetros que devuelva siempre "true"
function verdad(){
    return true
}
const tr= verdad();
console.log(tr)

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const resolver= new Promise((resolve, reject)=>{
    const milliseconds=5000;
    setTimeout(()=>{
        resolve();
    },milliseconds)
})
console.log("Empieza el programa")
resolver.then(()=>{
    console.log("Hola soy una promesa")
})


//- Una función generadora de índices pares automáticos
function* generadora(){
    let id=0;
    while(true){
        id ++;
        yield id*2;
        if(id===10){
            return;
        }
    }
}
const ver= generadora();
console.log(ver.next())
console.log(ver.next())
console.log(ver.next())
console.log(ver.next())