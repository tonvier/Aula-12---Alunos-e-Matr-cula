// ================================ // Simulação de Conclave em JavaScript // ================================

// Importando módulo para entrada de dados no terminal const entrada = (promp-sync)({ sigint: false });

// ================================ // CADASTRO DOS CARDEAIS // ================================ let cardeais = []; // Vetor para armazenar objetos {id, nome} const TOTAL_CARDEAIS = 5;

// Loop para cadastro automático de 5 cardeais for (let i = 1; i <= TOTAL_CARDEAIS; i++) { let nome = readlineSync.question(Digite o nome do Cardeal ${i}: ); cardeais.push({ id: i, nome: nome }); }

console.log("\n===== CARDEAIS CADASTRADOS ====="); cardeais.forEach((c) => console.log(${c.id} - ${c.nome})); console.log("================================\n");

// ================================ // FUNÇÃO DE VOTAÇÃO // ================================ function realizarVotacao() { let votos = new Array(TOTAL_CARDEAIS).fill(0); // vetor de contagem de votos let totalVotos = 0;

console.log("===== INÍCIO DA VOTAÇÃO =====\n");

// Cada cardeal vota secretamente (simulado pelo usuário escolhendo) for (let i = 1; i <= TOTAL_CARDEAIS; i++) { console.log("\nEscolha o número do cardeal para votar:"); cardeais.forEach((c) => console.log(${c.id} - ${c.nome}));

let voto;
do {
  voto = readlineSync.questionInt(`Cardeal ${i}, digite seu voto (1 a 5): `);
} while (voto < 1 || voto > TOTAL_CARDEAIS);

votos[voto - 1]++; // incrementa o voto do cardeal escolhido
totalVotos++;
}

console.log("\n===== APURAÇÃO DA VOTAÇÃO ====="); cardeais.forEach((c, index) => { console.log(${c.nome}: ${votos[index]} voto(s)); });

// Verifica se houve vencedor const doisTerços = Math.ceil((2 / 3) * totalVotos); // regra 2/3 let vencedor = null;

for (let i = 0; i < votos.length; i++) { if (votos[i] >= doisTerços) { vencedor = cardeais[i]; break; } }

if (vencedor) { console.log(\n HABEMUS PAPAM! O novo Papa é ${vencedor.nome}.); return true; // encerra } else { console.log("\n Nenhum cardeal atingiu 2/3 dos votos."); return false; // nova rodada } }

// ================================ // LOOP PRINCIPAL // ================================ let eleito = false;

while (!eleito) { eleito = realizarVotacao();

if (!eleito) { let opcao = readlineSync.question("\nDeseja encerrar a votação? (S/N): ").toUpperCase(); if (opcao === "S") { console.log("\n Votação encerrada sem a escolha de um Papa."); break; } console.log("\n Nova rodada de votação será iniciada!\n"); } }