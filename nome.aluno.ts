// Classe Aluno
class Aluno {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }
}

// Classe Turma
class Turma {
  constructor() {
    this.listaAlunos = []; // atributo lista de alunos
  }

  // Método para adicionar aluno
  adicionarAluno(aluno) {
    if (aluno instanceof Aluno) {
      this.listaAlunos.push(aluno);
      console.log(`Aluno ${aluno.nome} (Matrícula: ${aluno.matricula}) adicionado com sucesso!`);
    } else {
      console.log("Erro: só é possível adicionar objetos do tipo Aluno.");
    }
  }

  // Método para listar todos os alunos
  listarAlunos() {
    console.log("Lista de alunos da turma:");
    if (this.listaAlunos.length === 0) {
      console.log("Nenhum aluno cadastrado.");
    } else {
      this.listaAlunos.forEach((aluno, index) => {
        console.log(`${index + 1}. Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}`);
      });
    }
  }
}

// Exemplo de uso
const turma1 = new Turma();

const aluno1 = new Aluno("Maria Silva", "2023001");
const aluno2 = new Aluno("João Souza", "2023002");

turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);

turma1.listarAlunos();