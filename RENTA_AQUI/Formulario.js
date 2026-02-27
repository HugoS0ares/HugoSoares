// --- 1. CARREGAR HISTÓRICO AO ABRIR A PÁGINA ---
document.addEventListener('DOMContentLoaded', recarregarTabela);

function recarregarTabela() {
    const tabelaCorpo = document.getElementById('tabelaCorpo');
    if (!tabelaCorpo) return;
    
    tabelaCorpo.innerHTML = ""; 

    fetch('listar.php')
    .then(response => response.json())
    .then(dados => {
        dados.forEach(aluguer => adicionarLinhaTabela(aluguer));
    })
    .catch(error => console.error("Erro ao carregar o histórico:", error));
}


// --- 2. SUBMETER OU ATUALIZAR ---
document.getElementById('rentalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;
    const btn = document.getElementById('btnSubmit');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let allValid = true;

    btn.classList.remove('success', 'error');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allValid = false;
            input.style.borderColor = "#c62828";
        } else {
            input.style.borderColor = "rgba(93, 64, 55, 0.2)";
        }
    });

    if (!allValid) {
        btn.classList.add('error');
        btn.textContent = "❌ Preencha todos os campos!";
        setTimeout(() => {
            btn.classList.remove('error');
            btn.textContent = document.getElementById('edit_id_aluguer').value ? "🔄 Atualizar Aluguer" : "Submeter Aluguer";
        }, 2000);
        return; 
    }

    const isEdit = document.getElementById('edit_id_aluguer').value !== "";
    const ficheiroPHP = isEdit ? 'editar.php' : 'submeter.php';

    const formData = new FormData(form);
    
    // Bloqueia o botão para não haver cliques duplos
    btn.textContent = "⌛ A gravar...";
    btn.disabled = true; 

    fetch(ficheiroPHP, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        if (result.trim().startsWith("Sucesso")) {
            btn.classList.add('success');
            btn.textContent = isEdit ? "✅ Aluguer Atualizado!" : "✅ Aluguer Registado!";
            
            // AQUI ESTÁ A LINHA QUE FALTAVA! Desbloqueia o botão imediatamente:
            btn.disabled = false; 

            recarregarTabela();

            setTimeout(() => {
                btn.classList.remove('success');
                btn.textContent = "Submeter Aluguer";
                form.reset();
                document.getElementById('edit_id_aluguer').value = ""; 
                inputs.forEach(i => i.style.borderColor = "rgba(93, 64, 55, 0.2)");
            }, 3000);

        } else {
            throw new Error(result);
        }
    })
    .catch(error => {
        btn.classList.add('error');
        btn.textContent = "❌ Erro na Base de Dados";
        
        // Também garante que desbloqueia se houver um erro
        btn.disabled = false; 
        
        console.error("Erro detetado:", error.message);
        setTimeout(() => {
            btn.classList.remove('error');
            btn.textContent = isEdit ? "🔄 Atualizar Aluguer" : "Submeter Aluguer";
        }, 4000);
    });
});


// --- 3. CARREGAR PARA EDIÇÃO ---
function carregarParaEdicao(aluguer) {
    document.getElementById('edit_id_aluguer').value = aluguer.Id_Aluguer || "";
    document.getElementById('id_cliente').value = aluguer.Id_Cliente || "";
    document.getElementById('id_veiculo').value = aluguer.Id_Veiculo || "";
    document.getElementById('id_funcionario').value = aluguer.Id_Funcionario || "";
    document.getElementById('estado').value = aluguer.Estado || "";
    
    if (aluguer.Data_Inicio) {
        document.getElementById('data_inicio').value = aluguer.Data_Inicio.replace(' ', 'T').substring(0, 16);
    }
    if (aluguer.Data_Fim_Prevista) {
        document.getElementById('data_fim_prevista').value = aluguer.Data_Fim_Prevista.replace(' ', 'T').substring(0, 16);
    }
    
    document.getElementById('observacoes').value = aluguer.Observacoes || "";

    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.textContent = "🔄 Atualizar Aluguer";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// --- 4. FUNÇÃO PARA APAGAR ---
function apagarRegisto(idAluguer, botao) {
    if (!confirm("Tens a certeza que queres apagar o aluguer nº " + idAluguer + "?")) return;

    const formData = new FormData();
    formData.append('id_aluguer', idAluguer);
    
    const linha = botao.closest('tr');
    botao.textContent = "⌛";
    botao.disabled = true;

    fetch('apagar.php', { method: 'POST', body: formData })
    .then(response => response.text())
    .then(result => {
        if (result.trim() === "Sucesso") {
            linha.style.transition = 'opacity 0.3s ease';
            linha.style.opacity = '0';
            setTimeout(() => linha.remove(), 300);
        } else {
            alert("Não foi possível apagar:\n" + result);
            botao.textContent = "🗑️ Apagar";
            botao.disabled = false;
        }
    })
}


// --- 5. DESENHAR LINHA NA TABELA ---
function adicionarLinhaTabela(aluguer) {
    const tabelaCorpo = document.getElementById('tabelaCorpo');
    const novaLinha = document.createElement('tr');
    
    novaLinha.innerHTML = `
        <td>${aluguer.Id_Cliente}</td>
        <td>${aluguer.Id_Veiculo}</td>
        <td><strong>${aluguer.Estado}</strong></td>
        <td>${aluguer.Data_Inicio || '-'}</td>
        <td>${aluguer.Data_Fim_Prevista || '-'}</td>
        <td class="acoes-td"></td>
    `;
    
    const tdAcoes = novaLinha.querySelector('.acoes-td');
    
    const btnEditar = document.createElement('button');
    btnEditar.type = 'button';
    btnEditar.className = 'btn-editar';
    btnEditar.innerHTML = '✏️ Editar';
    btnEditar.onclick = () => carregarParaEdicao(aluguer);
    
    const btnApagar = document.createElement('button');
    btnApagar.type = 'button';
    btnApagar.className = 'btn-apagar';
    btnApagar.innerHTML = '🗑️ Apagar';
    btnApagar.onclick = function() { apagarRegisto(aluguer.Id_Aluguer, this); };
    
    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnApagar);

    tabelaCorpo.appendChild(novaLinha);
}