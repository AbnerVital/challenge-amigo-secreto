let amigos = []

function adicionarAmigo() { 
    let nome = document.querySelector('input').value; 
    if (document.querySelector('input').value == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        limparCampo();
        exibirAmigos(amigos);
    }       
}

function exibirAmigos(amigos) {
    const lista = document.getElementById('listaAmigos'); // Seleciona o elemento <ul> pelo ID
    lista.innerHTML = ''; // Limpa o conteúdo anterior da lista

    amigos.forEach(function(amigo) {
        const item = document.createElement('li'); // Cria um novo elemento <li>
        item.textContent = amigo; // Define o texto do <li> com o nome do amigo
        lista.appendChild(item); // Adiciona o <li> como filho da <ul>
    });
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}