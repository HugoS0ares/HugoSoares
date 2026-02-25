document.getElementById('rentalForm').addEventListener('submit', function (e) {
    // 1. Impede o recarregamento da página para permitir que o Fetch controle o envio
    e.preventDefault();

    const form = this;
    const btn = document.getElementById('btnSubmit');
    
    // Captura todos os campos obrigatórios (input e select)
    const inputs = form.querySelectorAll('input[required], select[required]');
    let allValid = true;

    // Remove estados de cores anteriores do botão
    btn.classList.remove('success', 'error');
    
    // 2. Validação visual simples no Front-end
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allValid = false;
            input.style.borderColor = "#c62828"; // Borda vermelha se estiver vazio
        } else {
            input.style.borderColor = "rgba(93, 64, 55, 0.2)"; // Cor original castanha suave
        }
    });

    if (!allValid) {
        // Feedback de erro se faltarem campos
        btn.classList.add('error');
        btn.textContent = "❌ Preencha todos os campos!";
        
        setTimeout(() => {
            btn.classList.remove('error');
            btn.textContent = "Submeter Aluguer";
        }, 2000);
        return; 
    }

    // 3. Preparação dos dados para o PHP
    const formData = new FormData(form);

    // Feedback visual de carregamento
    btn.textContent = "⌛ A gravar na Base de Dados...";
    btn.disabled = true;

    // 4. Envio para o PHP através do Servidor Local (XAMPP/Apache)
    // Importante: O ficheiro index.html deve ser aberto via http://localhost/rentaaqui/
    fetch('submeter.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Captura erros de servidor como o 405 (Method Not Allowed) ou 404 (Not Found)
        if (!response.ok) {
            throw new Error("Erro no servidor: " + response.status + " - " + response.statusText);
        }
        return response.text();
    })
    .then(result => {
        console.log("Resposta do MySQL:", result);

        if (result.trim() === "Sucesso") {
            // SUCESSO: O SQL aceitou os dados e o Trigger mudou o estado do veículo
            btn.classList.add('success');
            btn.textContent = "✅ Aluguer Registado!";
            btn.disabled = false;

            // Limpa o formulário e reseta o botão após 3 segundos
            setTimeout(() => {
                btn.classList.remove('success');
                btn.textContent = "Submeter Aluguer";
                form.reset();
                // Reset das bordas dos inputs
                inputs.forEach(i => i.style.borderColor = "rgba(93, 64, 55, 0.2)");
            }, 3000);

        } else {
            // O PHP devolveu um erro do MySQL (ex: ID que não existe)
            throw new Error(result);
        }
    })
    .catch(error => {
        // ERRO: Algo falhou na ligação ou no SQL (ex: Foreign Key inexistente)
        btn.classList.add('error');
        btn.textContent = "❌ Erro na Base de Dados";
        btn.disabled = false;
        
        console.error("Detalhes do Erro:", error.message);

        // Permite tentar novamente após 3 segundos
        setTimeout(() => {
            btn.classList.remove('error');
            btn.textContent = "Submeter Aluguer";
        }, 4000);
    });
});