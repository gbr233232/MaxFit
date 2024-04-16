
function verificarPreenchimentoDadosPessoais(){
    var nome_campo = document.getElementById('nome').value
    var email_campo = document.getElementById('email').value
    var cpf_campo = document.getElementById('cpf').value
    var sexo_campo = document.getElementById('sexo').value
    var data_nascimento_campo = document.getElementById('data_nascimento').value
    var numero_campo = document.getElementById('telefone').value
    if(numero_campo == ''||nome_campo == '' || email_campo == '' || cpf_campo == '' || sexo_campo == '...' || data_nascimento_campo == '' ){
        alert('Preencha as informações')

    }
    else{
        window.location.href = 'pagamento.html'
    }

}


function verificarPreenchimentoDadosFinanceiros(){
    var num_cartao_campo = document.getElementById('numero_cartao').value
    var data_validade_campo = document.getElementById('data_validade').value
    var cvv_campo = document.getElementById('cvv').value
    var nome_proprietario_campo = document.getElementById('nome_proprietario').value
    var num_parcelas_campo = document.getElementById('num_parcelas').value
    if(num_cartao_campo == '' ||data_validade_campo == '' || cvv_campo == '' || nome_proprietario_campo == '' || num_parcelas_campo == '...' ){
        alert('Preencha as informações')

    }
    else{
        window.location.href = 'pagEfetuado.html'
    }

}

function verificarPreenchimentoAreaCliente(){
    var email_cliente = document.getElementById('email_cliente').value
    var cpf_cliente = document.getElementById('cpf_cliente').value
    
    if(email_cliente == '' || cpf_cliente == ''){
        alert('Preencha as informações')

    }
    else{
        window.location.href = 'areaCliente.html'
    }

}