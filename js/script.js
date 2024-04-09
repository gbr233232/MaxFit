document.addEventListener('DOMContentLoaded', function() {
    var campoTexto = document.getElementById('nome');

    campoTexto.addEventListener('input', function() {
        var texto = this.value;
        this.value = texto.replace(/[0-9]/g, ''); // Remove todos os números da entrada do usuário
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o campo de entrada e o botão de envio
    var campoDeEntrada = document.getElementById('campoDeEntrada');
    var botaoEnviar = document.getElementById('botaoEnviar');

    // Adiciona um ouvinte de evento ao botão de envio
    botaoEnviar.addEventListener('click', function() {
        // Verifica se o campo de entrada está vazio
        if (campoDeEntrada.value === '') {
            alert('Por favor, preencha o campo de entrada!');
        } else {
            // Se o campo não estiver vazio, você pode prosseguir com o envio do formulário ou outras ações
            alert('Campo preenchido: ' + campoDeEntrada.value);
            // Aqui você pode adicionar qualquer ação adicional que deseja executar quando o campo está preenchido
        }
    });
});