const soletraPalavra = function (palavra: string): string {

    const palavraSoletrada: string = palavra.split('').join('-');
    return palavraSoletrada;
}

console.log(soletraPalavra("programador"));