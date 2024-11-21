    // Função para selecionar um plano
    function selectPlan(card) {
        // Remover a seleção de todos os outros cards
        document.querySelectorAll('.plan-card').forEach(card => card.classList.remove('active'));
        card.classList.add('active');
        card.querySelector('input').checked = true;
        
        // Habilitar o botão 'Continuar para o cadastro' quando um plano for selecionado
        document.getElementById('continue-btn').disabled = false;
      }

