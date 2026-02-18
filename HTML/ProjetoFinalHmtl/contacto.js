const formulario = document.querySelector('form');
const btnEnviar = document.querySelector('button[type="submit"]');
const textoOriginal = btnEnviar.innerText;

// --- FUNÇÃO PARA O FEEDBACK VISUAL (VERDE) ---
function mostrarSucesso() {
    btnEnviar.innerText = "ENVIADO";
    btnEnviar.style.backgroundColor = "#27ae60"; // Verde
    btnEnviar.style.color = "white";
    btnEnviar.disabled = true;

    formulario.reset();

    setTimeout(() => {
        btnEnviar.innerText = textoOriginal;
        btnEnviar.style.backgroundColor = ""; 
        btnEnviar.style.color = "";
        btnEnviar.disabled = false;
    }, 3000);
}

// --- NOVA FUNÇÃO DE VALIDAÇÃO ---
function validarFormulario() {
    // Selecionamos os 3 elementos
    const nome = formulario.querySelector('input[type="text"]');
    const email = formulario.querySelector('input[type="email"]');
    const mensagem = formulario.querySelector('textarea');
    
    let erro = false;

    // Criamos um array com os 3 para validar todos de uma vez
    [nome, email, mensagem].forEach(campo => {
        if (campo.value.trim() === "") {
            campo.classList.add('input-erro'); // Adiciona a borda vermelha do teu CSS
            erro = true;
        } else {
            campo.classList.remove('input-erro');
        }
    });

    return !erro; // Retorna "true" se estiver tudo bem, "false" se faltar algo
}

// --- 1. EVENTO DE SUBMIT ---
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 
    
    if (validarFormulario()) {
        console.log("Sucesso: Campos preenchidos.");
        mostrarSucesso();
    } else {
        console.log("Erro: Faltam campos.");
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
});

// --- 2. EVENTO DE TECLADO (Ctrl + Enter) ---
const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', (evento) => {
    if (evento.key === "Enter" && evento.ctrlKey) {
        evento.preventDefault();
        
        if (validarFormulario()) {
            mostrarSucesso();
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    }
});

// --- 3. LIMPAR O VERMELHO AO DIGITAR ---

const todosOsCampos = document.querySelectorAll('.campo input, .campo textarea');
todosOsCampos.forEach(campo => {
    campo.addEventListener('input', () => {
        if (campo.value.length > 0) {
            campo.classList.remove('input-erro');
            // Mantém o teu efeito dourado que já tinhas
            campo.style.borderColor = "#d4af37";
        }
    });
});

const mapa = document.querySelector('.contacto_mapa iframe');
if (mapa) {
    mapa.addEventListener('mouseenter', () => {
        mapa.style.filter = "grayscale(0) contrast(1)";
        mapa.style.transition = "0.5s";
    });

    mapa.addEventListener('mouseleave', () => {
        mapa.style.filter = "grayscale(0.5)";
    });
}