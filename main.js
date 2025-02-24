function navigateTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function updateSoilData() {
    // Lógica para atualizar os dados do solo
    alert('Dados do solo atualizados!');
}

function savePlantProfile() {
    // Lógica para salvar o perfil da planta
    alert('Perfil da planta salvo!');
}

function confirmIrrigation() {
    // Lógica para confirmar irrigação
    alert('Irrigação confirmada!');
}

function saveSettings() {
    // Lógica para salvar as configurações
    alert('Configurações salvas!');
}

// Função para cadastrar usuário
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Lógica para salvar os dados do usuário
    alert('Usuário cadastrado com sucesso!');
    window.location.href = 'login.html';
});

// Função para login de usuário
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Lógica para autenticar o usuário
    alert('Login realizado com sucesso!');
    window.location.href = 'index.html';
});

// Inicializar a tela inicial
document.getElementById('dashboard')?.classList.remove('hidden');
document.getElementById('register')?.classList.remove('hidden');
document.getElementById('login')?.classList.remove('hidden');