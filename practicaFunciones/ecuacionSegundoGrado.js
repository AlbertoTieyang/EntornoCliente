function segundoGrado (a, b, c) {
    let resultadoPositivo = ((-b+(Math.sqrt(b*b-4*a*c)))/(2*a));
    let resultadoNegativo = ((-b-(Math.sqrt(b*b-4*a*c)))/(2*a));

    const resultado = [resultadoPositivo, resultadoNegativo];
    return resultado;
}

console.log(segundoGrado(1,4,1));