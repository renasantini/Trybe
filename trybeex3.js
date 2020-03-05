let numbers = [1, 1, 3, 4, 5, 5, 6, 7, 7, 8];
let contador = 0;
let y;
let numero;
let tamanho = numbers.length;
console.log(numbers.length);
console.log(tamanho);
let repetido = false;



for (numero = 0; numero <= tamanho - 2; numero++){
    repetido = false;
    console.log (numero)
    console.log (contador)
    for (y = numero + 1; y <= tamanho - 1; y++){
        if (numbers[y] == numbers[numero]){    
            for (let x = 0; x <= numero - 1; x++){
                      if (numbers[numero] == numbers[x]){
                            repetido = false;
                        }
                        else {
                            repetido = true;
                        }
                }   
            if (repetido == true){
                contador = contador +1
            }
            }
        }
}
console.log (contador)
