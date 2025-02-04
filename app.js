// Declaração de um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionarAmigo() { 
    let nome = document.querySelector('input').value; // Obtém o valor do campo de entrada
    
    // Verifica se o campo está vazio
    if (document.querySelector('input').value == '') {
        alert('Por favor, insira um nome.'); // Alerta se o campo estiver vazio
    } else {
        amigos.push(nome); // Adiciona o nome ao array de amigos
        limparCampo(); // Limpa o campo de entrada
        exibirAmigos(amigos); // Atualiza a lista exibida na tela
    }       
}

// Função para exibir os amigos na tela
function exibirAmigos(amigos) {
    let lista = document.getElementById('listaAmigos'); // Seleciona o elemento <ul> pelo ID
    lista.innerHTML = ''; // Limpa o conteúdo anterior da lista para evitar duplicação

    amigos.forEach(function(amigo) { // Itera sobre o array de amigos
        const item = document.createElement('li'); // Cria um novo elemento <li>
        item.textContent = amigo; // Define o texto do <li> com o nome do amigo
        lista.appendChild(item); // Adiciona o <li> como filho da <ul>
    });
}

// Função para sortear um amigo secreto
function sortearAmigo(){
    // Verifica se há pelo menos dois amigos para realizar o sorteio
    if (amigos.length <= 1){
        alert('Não tem amigos suficientes para fazer o sorteio'); // Alerta se não houver amigos suficientes
    } else {
        amigoSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório para o sorteio
        console.log(amigoSorteado); // Exibe o índice sorteado no console (para depuração)
        let nomeSorteado = document.getElementById('resultado'); // Seleciona o elemento para exibir o resultado
        nomeSorteado.innerHTML = `O amigo secreto sorteado é: ${amigos[amigoSorteado]}`; // Exibe o nome do amigo sorteado
        limparCampoLI(); // Limpa a lista de amigos exibida após o sorteio
    }
}

// Função para limpar o campo de entrada
function limparCampo() {
    amigo = document.querySelector('input'); // Seleciona o campo de entrada
    amigo.value = ''; // Limpa o valor do campo
}

// Função para limpar a lista de amigos exibida
function limparCampoLI() {
    lista = document.getElementById('listaAmigos'); // Seleciona a lista de amigos
    lista.innerHTML = ''; // Limpa o conteúdo da lista
}