//----------------------------------------------------------------
//daqui para baixo começa o js do site



//buca no site pelo titulo e armazena ele dentro da variavel
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da variavel titulo para fins de teste
console.log(titulo.textContent);
//altera o conteudo da variavel titulo para o texto desejado
titulo.textContent = "Fica Grande Nutrição";

//mudanças na tabela
//armazena na variável paciente os dados  
let paciente = document.querySelector("#primeiro-paciente");
//mostra no console o valor variável 
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");


let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

//validação de dados
if(altura <= 0 || altura >= 2.00 ) {
    tdImc.textContent = "Peso inválido!"
    
}

if(altura <= 0 || altura >= 3) {
    tdImc.textContent = "Altura inválida!"
    
}

//DESAFIO!!!
//FAZER APARECER O ERRO "PESO INVÀLIDO"
//NA CRLULA DO IMC NA TABELA