let n = 31;

let numero;

for (numero = 1; numero <= n; numero++){

if (numero % 3 == 0){
    if (numero % 5 == 0){
        console.log ('FizzBuzz')
    }
    else {
        console.log ('Fizz')
    }
}
else if (numero % 5 == 0){
    console.log ('Buzz')
}
else{
    console.log (numero)
}
}