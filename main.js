const form = document.getElementById('form-atividade');
let linhas = ''
const nomesContatos = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = 7

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumerocon = document.getElementById('número-contato');

    if (!validarTelefone(inputNumerocon.value)) {
        alert('Telefone inválido! Use o formato (XX) XXXX-XXXX ou (XX) 9XXXX-XXXX.');
        document.getElementById('número-contato').classList.add('reprovado');
        return;
    } else {
        document.getElementById('número-contato').classList.remove('reprovado');
    }

    if (nomesContatos.includes(inputNomeContato.value)) {
        alert(`O contato: "${inputNomeContato.value}" já foi inserido`);
    } else {
        nomesContatos.push(inputNomeContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumerocon.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    
    inputNomeContato.value = ''
    inputNumerocon.value = ''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function validarTelefone(telefone) {
    const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;  
    return regexTelefone.test(telefone);
}