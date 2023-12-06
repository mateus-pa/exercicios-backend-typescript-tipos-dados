const listaUsuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

const buscarUsuario = function (listaUsuarios: { nome: string, idade: number, status: boolean }[], nomeUsuario: string): object[] {
    const listaUsuariosEncontrados: object[] = [];


    for (const usuario of listaUsuarios) {
        const nomeUsuarioMinusculo: string = usuario.nome.toLowerCase();

        if (nomeUsuarioMinusculo.includes(nomeUsuario.toLowerCase())) {
            listaUsuariosEncontrados.push(usuario);
        }
    }

    return listaUsuariosEncontrados;
}

console.log(buscarUsuario(listaUsuarios, "jo"));