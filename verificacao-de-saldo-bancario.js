
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Dados iniciais fixos, saldo da conta e nome do titular:
let saldoConta = 2000; 
const nomeTitular = "Mariane";
//PODE COLOCAR AS CONST AQUI TAMBÉM
//const valorSaque = 300;
//const valorDeposito = 200;

// Função para verificar o saldo:
function verificarSaldo() {
    return (`Saldo da conta de ${nomeTitular}: R$${saldoConta.toFixed(2)}`);
}

// Função para realizar um depósito:
function realizarDeposito(valorDeposito) {
    saldoConta += valorDeposito;
    return (`Deposito de R$${valorDeposito.toFixed(2)} realizado com sucesso. Saldo total: R$${(saldoConta).toFixed(2)}`);
}

// TODO: Crie uma função 'realizarSaque' para realizar o saque e ao lado o parâmetro da função (valor): 
function realizarSaque(valorSaque) {
    if (valorSaque > saldoConta) {
        return ("Saldo insuficiente para realizar o saque.");
    } else {
        saldoConta -= valorSaque;
        return (`Saque de R$${valorSaque.toFixed(2)} realizado com sucesso. Saldo total: R$${(saldoConta).toFixed(2)}`);
    }
}
//TODO: Crie a condição para verifica se o 'valor' de saque é maior que o 'saldoConta':
  
//TODO: Retorne o valor de saque e o saldo da conta, respeitando as duas casas decimais:


const opcao = 3;

//TODO: Determine corretamente a estrutura condicional para escolher a ação com base na opção selecionada:
if (opcao === 1) {
    console.log(verificarSaldo(saldoConta));
} else if (opcao === 2) {
    const valorDeposito = 200;
    console.log(realizarDeposito(valorDeposito));
} else if (opcao === 3) {
    const valorSaque = 300;
    console.log(realizarSaque(valorSaque));
} else {
    console.log("Opcao invalida. Tente novamente.");
}

//TESTE 1
//Dado de entrada:
//4
//Saída esperada:
//Opcao invalida. Tente novamente.

//TESTE 2
//Dado de entrada:
//3
//300
//Saída esperada:
//Saque de R$300.00 realizado com sucesso. Saldo total: R$1700.00

//TESTE 3
//Dado de entrada:
//2
//200
//Saída esperada:
//Deposito de R$200.00 realizado com sucesso. Saldo total: R$2200.00

//TESTE 4
//Dado de entrada:
//1
//Saída esperada:
//Saldo da conta de Mariane: R$2000.00