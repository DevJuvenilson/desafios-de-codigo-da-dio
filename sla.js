//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function gets(array, index) {
    if (index < 0 || index >= array.length) {
        return undefined; // ou qualquer lógica de erro
    }
    return array[index];
}

function print(texto) {
    return console.log(texto)
}

// TODO: Crie as variáveis titulo, descricao e dataVencimento para guardar as informações das tarefas:
const titulo = [
    "Backup Noturno",
    "Monitoramento de Rede",
    "Atualizacao de software"
];
const descricao = [
    "Executar backup automatico de servidores as 2h da madrugada",
    "Configurar alertas para trafego em tempo real",
    "Aplicar patches"
];
const dataDeVencimento = [
    "",
    "18/12",
    "22/12",
]

// Obtém o titulo e a descricao a partir da entrada do console  
const titulo1 = titulo[0];
const descricao1 = descricao[0];
const descricaoLenght = descricao1.length;
const dataDeVencimento1 = gets(dataDeVencimento, 0);

// TODO: Crie uma estrutura condicional 'if/else' para verificar se a descrição da tarefa excede 50 caracteres.
function verificarDescricaoLenght (descricaoLenght, descricao, dataDeVencimento) {
  if (descricaoLenght > 50) {
    return ('Descricao ultrapassa limite de caracteres.');
  }

  if (descricaoLenght <= 50) {
    return (`${descricao} ate ${dataDeVencimento}`);
  }
}

 // TODO: Imprima a descricao e a data de vencimento como nos exemplos da tabela:         
print(verificarDescricaoLenght(descricaoLenght, descricao1, dataDeVencimento1));