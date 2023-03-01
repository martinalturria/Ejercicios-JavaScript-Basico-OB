let num = 10;
let factorial = num;
let cont = num - 1;

while(cont > 0){
    if(cont === 0){
        break;
    }

    factorial *= cont;    
    cont--;
}

console.log(factorial);