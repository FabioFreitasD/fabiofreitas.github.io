document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/fabiofreitasd')
            // Verifica se todos os elementos DOM foram encontrados na página
    if (!nameElement || !userNameElement || !avatarElement || !reposElement || !followersElement || !followingElement || !linkElement) {
        // Se algum elemento não for encontrado, exibe uma mensagem de erro e interrompe a execução
        console.error('Um ou mais elementos DOM não foram encontrados.');
        return;
    }

    try {
        // Faz uma solicitação para a API do GitHub para obter os dados do usuário
        const response = await fetch('https://api.github.com/users/fabiofreitasd');
        
        // Verifica se a resposta da API foi bem-sucedida (status HTTP 200)
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, lança um erro
            throw new Error('Erro na resposta da API');
        }
        
        // Converte a resposta da API para JSON
        const json = await response.json();
        
        // Atualiza os elementos DOM com os dados recebidos da API
        nameElement.innerText = json.name || 'Nome não disponível';  // Nome do usuário, se disponível
        userNameElement.innerText = json.login || 'Usuário não disponível';  // Nome de usuário, se disponível
        avatarElement.src = json.avatar_url || '';  // URL do avatar, se disponível
        followingElement.innerText = json.following || '0';  // Número de pessoas que o usuário está seguindo, se disponível
        followersElement.innerText = json.followers || '0';  // Número de seguidores, se disponível
        reposElement.innerText = json.public_repos || '0';  // Número de repositórios públicos, se disponível
        linkElement.href = json.html_url || '#';  // URL do perfil GitHub do usuário, se disponível
        
    } catch (error) {
        // Se ocorrer um erro durante a solicitação ou processamento, exibe uma mensagem de erro
        console.error('Erro ao buscar dados:', error);
    }
});
