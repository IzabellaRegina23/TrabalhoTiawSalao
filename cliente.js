let bancoClientes = JSON.parse(localStorage.getItem("contatos"));

if (!bancoClientes) {
    bancoClientes = [
        {
            "id": 1,
            "nome": "João da Silva",
            "cpf": "123.456.789-00",
            "dataNascimento": "1990-01-01",
            "telefone": "(11) 98765-4321",
            "endereco": "Rua das Flores, 100, Centro, São Paulo - SP"
        },
        {
            "id": 2,
            "nome": "Maria Oliveira",
            "cpf": "987.654.321-00",
            "dataNascimento": "1995-05-15",
            "telefone": "(21) 99887-7665",
            "endereco": "Avenida Atlântica, 500, Copacabana, Rio de Janeiro - RJ"
        },
        {
            "id": 3,
            "nome": "Carlos Pereira",
            "cpf": "456.789.123-00",
            "dataNascimento": "1985-10-30",
            "telefone": "(31) 91234-5678",
            "endereco": "Praça da Liberdade, 200, Funcionários, Belo Horizonte - MG"
        }
    ];
}

function limparForm() {
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("datanascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("endereco").value = "";
}

function cadastraNovoContato() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var datanascimento = document.getElementById("datanascimento").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var endereco = document.getElementById("endereco").value;

    var novoCliente = {
        "nomeCliente": nome,
        "cpfCliente": cpf,
        "dataNascCliente": datanascimento,
        "emailCliente": email,
        "telCliente": telefone,
        "endCliente": endereco
    };

    bancoClientes.push(novoCliente); // Coloca o novo contato no vetor
    localStorage.setItem("contatos", JSON.stringify(bancoClientes));
    limparForm();
    alert("Contato cadastrado com sucesso!");
    exibirContatos();
}

