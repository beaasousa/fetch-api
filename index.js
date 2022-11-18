const consultaUsuário = async (evento) => {
    evento.preventDefault();
    const campoMensagem = document.getElementById('mensagem');
    const campoAvatar = document.getElementById('avatar');

    //obtém url
    const usuário = document.getElementById('usuário').value;
    const url = `https://api.github.com/users/${usuário}`

    //executa a consulta a api do git
    const resposta = await fetch(url);
    console.log(resposta);

    if (!resposta.ok) {
        campoMensagem.innerHTML = 'Não encontrado';
        campoAvatar.setAttribute('src', '');
        return;
    }

    const resultado = await resposta.json();

    //exibir
    campoMensagem.innerHTML = resultado.name;
    campoAvatar.setAttribute('src', resultado.avatar_url);

};

  document.addEventListener('DOMContentLoaded', () => {
    const botaoConsultor = document.getElementById('consultar');
    botaoConsultor.addEventListener('click', consultaUsuário);
  });