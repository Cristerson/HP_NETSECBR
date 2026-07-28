// Botão flutuante do WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/5511944689800';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.innerHTML = '💬';
    whatsappButton.title = 'Fale conosco no WhatsApp';
    
    document.body.appendChild(whatsappButton);
});
