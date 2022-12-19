// identificando elementos digitados no teclado usando(code, key ou shiftKey)

function soltou(event){
    console.log('TECLA APERTADA' + event.code)
    console.log('SHIFT? ' + event.shiftKey);
    console.log('CTRL? ' + event.ctrlKey);
    console.log('ALT? ' + event.altKey);
    console.log('---')
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou);