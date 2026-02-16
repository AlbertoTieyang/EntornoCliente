function dividirEntreDos(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero === 0) {
        reject("No se puede dividir entre cero");
      } else {
        resolve(numero / 2);
      }
    }, 1000); 
  });
}

dividirEntreDos(10).then((resolve)=> {
    alert(resolve);
}).catch((error)=> {
    alert(error);
})