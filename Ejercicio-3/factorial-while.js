let num = 10;
let factorial = num;
let contador = num - 1;

while(contador > 0) {
    factorial *= contador;
    contador--;
}

console.log(factorial);