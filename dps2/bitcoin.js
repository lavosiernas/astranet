document.addEventListener("DOMContentLoaded", function() {
    var openChatButton = document.getElementById("open-chat-button");
    var chatModal = document.getElementById("chat-modal");
    var chatCloseButton = document.getElementById("chat-close-button");
    var chatMessages = document.getElementById("chat-messages");
    var chatForm = document.getElementById("chat-form");
    var chatInput = document.getElementById("chat-input");

    // Função para abrir o chat
    function openChat() {
        chatModal.style.display = "block";
        addMessage("Olá! Como posso ajudar você hoje?", "bot");
    }

    // Função para fechar o chat e limpar as mensagens
    function closeChat() {
        chatModal.style.display = "none";
        chatMessages.innerHTML = "";
    }

    openChatButton.addEventListener("click", openChat);
    chatCloseButton.addEventListener("click", closeChat);

    // Função para adicionar mensagens ao chat
    function addMessage(message, sender) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");
        if (sender === "user") {
            messageElement.classList.add("user-message");
        } else {
            messageElement.classList.add("bot-message");
        }
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Respostas automáticas humanizadas
    function respondToMessage(message) {
        var response;
        message = message.toLowerCase().trim();

        if (message.includes("ola") || message.includes("oi")) {
            response = "Olá! Qual é sua duivida?";
        } else if (message.includes("tchau") || message.includes("adeus")) {
            response = "Tchau! Foi um prazer ajudar você. Se precisar de mais alguma coisa, estarei por aqui.";
        } else if (message.includes("plano basico")) {
            response = "O Plano Básico é ideal para uso residencial, com velocidade de 100Mbps, suporte 24/7, sem limites de dados e roteador Wi-Fi gratuito incluído. Promoção especial disponível!";
        } else if (message.includes("plano senior")) {
            response = "O Plano Senior oferece 200Mbps, suporte técnico prioritário 24/7, sem limites de dados, rede exclusiva para jogos online e controle parental avançado.";
        } else if (message.includes("plano pleno")) {
            response = "O Plano Pleno oferece 150Mbps, sem limites de dados, suporte técnico prioritário 24/7 e rede estável para streaming de vídeo.";
        } else if (message.includes("plano avançado")) {
            response = "O Plano Avançado oferece 500Mbps, suporte técnico prioritário 24/7, baixa latência, segurança avançada, rede dedicada para jogos online e streaming de alta qualidade, e transmissão de dados ilimitada.";
        } else if (message.includes("problema de conexão")) {
            response = "Entendi. Vamos tentar resolver seu problema de conexão. Primeiro, você pode verificar se todos os cabos estão corretamente conectados? Em seguida, tente reiniciar seu roteador. Se o problema persistir, por favor, entre em contato com nosso suporte técnico pelo número 0800-123-456.";
        } else if (message.includes("informações sobre a astra net")) {
            response = "A Astra Net é uma provedora de serviços de internet dedicada a fornecer a melhor experiência de conexão para seus clientes. Oferecemos uma variedade de planos para atender às necessidades de todos os tipos de usuários. Para mais informações, visite nosso site ou entre em contato com nosso suporte.";
        } else if (message.includes("forma de pagamento")) {
            response = "Nós aceitamos diversas formas de pagamento, incluindo cartões de crédito, débito, boleto bancário e transferência bancária. Você pode escolher a opção que for mais conveniente para você.";
        } else if (message.includes("instalação")) {
            response = "Nosso processo de instalação é rápido e eficiente. Após a contratação do plano, um técnico agendará uma visita para realizar a instalação. Normalmente, todo o processo leva de 1 a 3 dias úteis.";
        } else if (message.includes("suporte tecnico")) {
            response = "Nosso suporte técnico está disponível 24/7 para ajudar você com qualquer problema. Você pode nos contatar pelo número 0800-123-456 ou pelo chat aqui no site.";
        } else if (message.includes("promoção")) {
            response = "Atualmente, estamos com várias promoções especiais nos nossos planos de internet. Por favor, visite nosso site ou entre em contato com nosso atendimento para saber mais detalhes.";
        } else if (message.includes("cobertura")) {
            response = "Para verificar a cobertura da Astra Net na sua região, por favor, visite nosso site e insira seu endereço na seção de cobertura. Se preferir, você pode também nos ligar para mais informações.";
        } else if (message.includes("cancelar plano")) {
            response = "Se você deseja cancelar seu plano, por favor, entre em contato com nosso atendimento ao cliente pelo número 0800-123-456. Estamos disponíveis para ajudar com o processo de cancelamento e esclarecer qualquer dúvida.";
        } else if (message.includes("ok obrigado")) {
            response = "Por nada, volte sempre que tiver uma duvida ;).";
        } else if (message.includes("fecha chat")) {
            response = "Ok, fechando o chat. Se precisar de mais alguma coisa, estarei por aqui.";
            setTimeout(closeChat, 1000); // Fecha o chat após 1 segundo
        } else {
            response = "Desculpe, não entendi sua pergunta. Você pode perguntar sobre nossos planos, resolver problemas de conexão ou obter informações sobre a Astra Net.";
        }

        // Adiciona um pequeno atraso variável para simular uma resposta mais humana
        var delay = Math.floor(Math.random() * 2000) + 1000; // Atraso entre 1 e 3 segundos
        setTimeout(function() {
            addMessage(response, "bot");
        }, delay);
    }

    // Evento de envio do formulário de chat
    chatForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            respondToMessage(userMessage);
            chatInput.value = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("back-button");

    backButton.addEventListener("click", function() {
        window.location.href = 'bxo.html'; // Substitua 'URL_DA_PAGINA' pela URL desejada
    });
});
