const entrada = require('prompt-sync')({ sigint: false });

while (true) { // loop caso o usuário decida sair

  console.log("\n===== Calculadora =====");
  console.log("Qual a operação: + , - , * , /");
  console.log("Digite SAIR para finalizar.");

  let operacao = entrada("Qual a operação deseja? ");

  if (operacao.toLowerCase() === "sair") {
    console.log("Finalizado com sucesso.");
    break; // finalizar o loop  }

  // Pedir os dois números
  let num1 = parseFloat(entrada("Digite o primeiro número: "));
  let num2 = parseFloat(entrada("Digite o segundo número: "));

  let resultado;

  // Verificar qual operação e calcular
  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "/") {
    if (num2 === 0) {
      console.log("Erro: Digite um número maior que 0");
      continue; // voltar ao loop inícial
     }
     resultado = num1 / num2;
  } else {
    console.log("Tipo de operação inválida. Tente novamente!");
    continue; // voltar ao loop inícial
  }

  console.log(`Resultado: ${resultado}`);
}