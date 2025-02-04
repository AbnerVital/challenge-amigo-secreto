let amigos = []

function adicionarAmigo() { 
    let nome = document.querySelector('input').value; 
    if (document.querySelector('input').value == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        limparCampo();
        
    }       
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}