// Declaração de um array vazio para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar um novo amigo à lista
function adicionarAmigo() { 
    const inputNome = document.querySelector('input'); // Obtém o campo de entrada
    const nome = inputNome.value.trim(); // Obtém o valor e remove espaços em branco

    if (!nome) {
        alert('Por favor, insira um nome.'); // Validação de entrada vazia
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array de amigos
    limparCampo(inputNome); // Limpa o campo de entrada
    exibirAmigos(); // Atualiza a lista exibida na tela
}

// Função para exibir os amigos na tela
function exibirAmigos() {
    const lista = document.getElementById('listaAmigos'); // Seleciona o elemento <ul> pelo ID
    lista.innerHTML = ''; // Limpa o conteúdo anterior da lista para evitar duplicação

    amigos.forEach(amigo => { // Itera sobre o array de amigos
        const item = document.createElement('li'); // Cria um novo elemento <li>
        item.textContent = amigo; // Define o texto do <li> com o nome do amigo
        lista.appendChild(item); // Adiciona o <li> como filho da <ul>
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) { // Validação de quantidade mínima de amigos
        alert('Não tem amigos suficientes para fazer o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório para o sorteio
    const nomeSorteado = amigos[indiceSorteado];

    document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${nomeSorteado}`; // Exibe o resultado
    limparLista(); // Limpa a lista de amigos exibida após o sorteio
}

// Função para limpar o campo de entrada
function limparCampo(input) {
    input.value = ''; // Limpa o valor do campo
    input.focus(); // Mantém o foco no campo para melhor experiência do usuário
}

// Função para limpar a lista de amigos exibida
function limparLista() {
    const lista = document.getElementById('listaAmigos'); // Seleciona a lista de amigos
    lista.innerHTML = ''; // Limpa o conteúdo da lista
}
