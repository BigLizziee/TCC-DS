const uri = 'http://localhost:3000';

function cadastrar(){
const form = document.querySelector('#cadastro form')
form.addEventListener('submit', e => {
    e.preventDefault()
    const dados = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value,
    }
    fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                alert('Cadastro feito com sucesso!');
            else
                alert('Erro ao cadastrar!');
                window.location.reload();
        })
})
}
