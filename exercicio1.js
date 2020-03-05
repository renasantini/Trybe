




let n;
n=25;
let resultado = []
let ehPrimo;
let div;
let x;

for (x = 2; x <= n ; x++){
    ehPrimo = true;
    for (div = 2; div < x; div++){
        if (x % div == 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo == true){
        resultado.push (x);
    }
}
console.log(resultado);








