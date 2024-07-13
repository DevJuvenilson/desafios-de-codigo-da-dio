const atividades = [
    {
        id: 1,
        titulo: "Backup Noturno",
        descricao: "Executar backup automatico de servidores as 2h da madrugada",
        dataDeVencimento: "",
    },
    {
        id: 2,
        titulo: "Monitoramento de Rede",
        descricao: "Configurar alertas para trafego em tempo real",
        dataDeVencimento: "18/12",
    },
    {
        id: 3,
        titulo: "Atualizacao de software",
        descricao: "Aplicar patches",
        dataDeVencimento: "22/12",
    },
];

function print(texto) {
    return console.log(texto)
}

const novaAtividade = new Map();

for (const atividade of atividades) {
    const { id } = atividade;
    novaAtividade.set(id, { ...atividade });
}

const descricao = (novaAtividade.get(3)).descricao;
const descricaoLenght = descricao.length;
const dataDeVencimento = (novaAtividade.get(3)).dataDeVencimento;

function verificarDescricaoLenght(descricaoLenght, descricao, dataDeVencimento) {
    if (descricaoLenght > 50) {
        return ('Descricao ultrapassa limite de caracteres.');
    }
    if (descricaoLenght <= 50) {
        return (`${descricao} ate ${dataDeVencimento}`);
    }
}

print(verificarDescricaoLenght(descricaoLenght, descricao, dataDeVencimento));