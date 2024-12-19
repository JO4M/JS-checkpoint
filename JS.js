//String reverser function
function reverseString(str) {
    return str.reverse();
}

// Count characters
function countCharacter(str) {
    return str.length();
}

//Capitalize the first letter ofwords
function capitalizeWords(str){
    return str
    .split(" ")
    .map(word => word.charAt(0).toUppercase() + word.slice(1))
    .join(" ");
}

//Find the max and the min in an array of number
function minMax(array){
    let Min = Math.min(...array);
    let Max = Math.max(...array);
    return [Min,Max];
}
let array = [5, 6, 1, 8];
console.log(minMax(array));

//Sum of all elements in an array
function arraySum(arra){
    let arra = [1..n];
    let sum = 0;
    for (let i = 0; i < arra.length; i++) {
        sum = sum + arra[i];
    }
}

//filter array qui filtre les nombres de caracteres supérieur à 5
function wordsFilter(fruits){
    let fruits = ["pomme","banane","mangue","orange"];
    return fruits.filter((word)=> word.length() > 5)
}

//Calculte factoriel of given numbers
function factorielCalculation(number) {
    let factoriel = 1;
    for (let i = number; number >=1; i--) {
        factoriel = factoriel * i;
}
}


//Check if a number is prime or not
function primeNumber(number) {
    if (number<=1) {
        return "false"; //Car le plus petit premier est 2
    }
    if (number === 2){
        return "true";//Car est le seul nombre premier pair
    }
    if (number%2 === 0){
        return "false";//Car tout nombre pair excepté 2 n'est pas premier
    }
    for (let i = 3; i <=number/2; i+=2) {
        if (number % i ===0) {
            return number + " n/'est pas un nombre premier";
        }else
        return number+" est un nombre premier";
    }
    }

    //Suite de fibonacci
    function suiteFibonacci(terms) {
        if (terms <= 0) return []; // Aucun terme si l'entrée est <= 0
        if (terms === 1) return [0]; 
        if (terms === 2) return [0, 1]; 
    
        let fib = new Array(terms);
        fib[0] = 0; 
        fib[1] = 1; 
    
        for (let i = 2; i < terms; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]; 
        }
    
        return fib; // Retourne le tableau rempli
    }

