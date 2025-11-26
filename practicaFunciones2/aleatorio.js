function aleatorio (numero1, numero2) {
    let max = 0;
    let min = 0;
    let numero;
    if (numero1 > numero2) {
        max = numero1;
        min = numero2;
        
        return Math.floor(Math.random() * (max - min + 1) + min);
    }else {
        max = numero2;
        min = numero1;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
}

console.log(aleatorio (2,100));