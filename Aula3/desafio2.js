// Crie uma agenda de contatos que armazene vários contatos em um array, 
// modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar 
// Map)

class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

const agendaDeContatos = [];

function adicionarContato(nome, telefone, email) {
    const novoContato = new Contato(nome, telefone, email);
    agendaDeContatos.push(novoContato);
    console.log(`Novo contato adicionado: ${nome}`);
}

function mostrarContatos() {
    console.log("Lista de Contatos:");
    agendaDeContatos.forEach(contato => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
}

adicionarContato("João", "123456789", "joao@example.com");
adicionarContato("Maria", "987654321", "maria@example.com");
adicionarContato("Pedro", "555555555", "pedro@example.com");

mostrarContatos();
