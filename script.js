const declarationsList = document.getElementById('declarationsList');

// Função para carregar declarações do localStorage
function loadDeclarations() {
    const declarations = JSON.parse(localStorage.getItem('declarations')) || [];
    declarations.forEach(declaration => {
        addDeclarationToDOM(declaration);
    });
}

// Função para adicionar uma declaração ao DOM
function addDeclarationToDOM(declaration) {
    const declarationDiv = document.createElement('div');
    declarationDiv.textContent = declaration;
    declarationsList.appendChild(declarationDiv);
}

// Evento para enviar a declaração
document.getElementById('declarationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const declarationInput = document.getElementById('declarationInput');
    const declarationText = declarationInput.value.trim();

    if (declarationText) {
        // Salvar a declaração no localStorage
        const declarations = JSON.parse(localStorage.getItem('declarations')) || [];
        declarations.push(declarationText);
        localStorage.setItem('declarations', JSON.stringify(declarations));

        // Adicionar a declaração ao DOM
        addDeclarationToDOM(declarationText);
        declarationInput.value = ''; // Limpa a caixa de entrada
    } else {
        alert('Por favor, escreva uma declaração!');
    }
});

// Carregar declarações ao iniciar a página
loadDeclarations();
