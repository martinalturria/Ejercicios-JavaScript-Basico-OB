function siempreTrue () {
    return true;
}

// async function asincrona(){
//     setTimeout(() => console.log("Hola, soy una promesa"), 5000);
// }

// asincrona()

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2;
    }    
}

let gen = idsPares()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)