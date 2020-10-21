document.body.addEventListener('keypress', onKeyPress);

function onKeyPress(keyboardEvent) {

    var keyKode = keyboardEvent.keyCode;

    if ((keyKode >= 65 && keyKode <= 90) ||
        (keyKode >= 97 && keyKode <= 122) ||
        (keyKode >= 1025 && keyKode <= 1105)) {

        var divEl = document.createElement('div');
        divEl.className = 'fadeInEffect';
        divEl.textContent = String.fromCharCode(keyKode);
        
        var symbolsContainer = document.querySelector('.symbolsContainer');
        symbolsContainer.appendChild(divEl);
    }
}
