function moverNaoButton(event) {
    event.preventDefault(); // Evita o comportamento padrão de toque
    const naoButton = document.getElementById('naoButton');
    const x = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - naoButton.offsetHeight);
    naoButton.style.left = `${x}px`;
    naoButton.style.top = `${y}px`;
}

function aceitar() {
    alert('Yay! Você aceitou! ❤️');
}