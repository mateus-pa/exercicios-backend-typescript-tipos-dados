const imprimeEtiqueta = (produto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const listaEtiquetas: string[] = [];

    for (let i = 1; i <= produto.qtd; i++) {
        const itemNumero = i.toString().padStart(3, "0");

        const etiqueta = `${produto.lote}-${produto.ano}-${itemNumero}`
        listaEtiquetas.push(etiqueta);
    }

    return listaEtiquetas;
}

console.log(imprimeEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));