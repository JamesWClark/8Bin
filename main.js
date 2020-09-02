const bits = document.getElementsByClassName('bit');
const result = document.getElementById('decimal-value');
let decimal = 0;

function toggle(element) {
    const bit = element.target;
    const exponent = parseInt(element.target.id[1]);
    
    if(bit.classList.contains('on')) {
        bit.classList.remove('on');
        bit.innerHTML = '0';
        decimal -= Math.pow(2, exponent);
    } else {
        bit.classList.add('on');
        bit.innerHTML = '1';
        decimal += Math.pow(2, exponent);
    }

    result.innerHTML = decimal;
}

for(let i = 0; i < bits.length; i++) {
    bits[i].addEventListener('click', toggle);
}