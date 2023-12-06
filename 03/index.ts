const criaTabuada = (listaNumeros: number[]) => {

    for (const numero of listaNumeros) {
        for (let i = 0; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }

        console.log("---------------\n");
    }
}

criaTabuada([1, 5, 2]);