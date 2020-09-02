const bits = document.getElementsByClassName('bit');
const result = document.getElementById('decimal-value');
const explanation = document.getElementById('explanation');

let decimal = 0;

function explain() {
    let numOn = 0;
    var exp = '';
    for(let i = 0; i < bits.length; i++) {
        if(bits[i].classList.contains('on')) {
            numOn++;
            const exponent = parseInt(bits[i].id[1]);
            exp += Math.pow(2, exponent) + ' + ';
        }
    }
    exp = exp.substring(0, exp.lastIndexOf('+'));
    exp += ' is ' + decimal;
    return numOn > 1 ? exp : '';
}

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
    explanation.innerHTML = explain();
}

for(let i = 0; i < bits.length; i++) {
    bits[i].addEventListener('click', toggle);
}