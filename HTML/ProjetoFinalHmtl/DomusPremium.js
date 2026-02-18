document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact_form');
    const botao = form.querySelector('button');
    const textoOriginalBotao = botao.innerText; // Guarda o texto original ("Agendar...")

    form.addEventListener('submit', (evento) => {
        const inputNome = form.querySelector('input[type="text"]');
        
        if (inputNome.value.trim() === "") {
            evento.preventDefault(); 
            inputNome.classList.add('input-erro');
            inputNome.focus();
        } else {
            evento.preventDefault();
            
            // 1. Feedback de Sucesso (Fica verde)
            botao.innerText = "PEDIDO ENVIADO";
            botao.style.backgroundColor = "#27ae60"; // Verde
            botao.style.color = "white";
            botao.disabled = true; // Impede cliques repetidos enquanto envia

            // 2. Limpar os campos do formulário
            form.reset();

            // 3. VOLTAR AO NORMAL (O "truque" para não precisar de refresh)
            setTimeout(() => {
                botao.innerText = textoOriginalBotao;
                botao.style.backgroundColor = ""; // Remove o verde, volta ao CSS original
                botao.style.color = "";
                botao.disabled = false;
                console.log("Botão restaurado. Pronto para novo envio.");
            }, 1500); // 1500 milissegundos = 1.5 segundos
        }
    });

    // Remover o vermelho quando o utilizador escreve

    form.querySelector('input[type="text"]').addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            e.target.classList.remove('input-erro');
        }
    });
});