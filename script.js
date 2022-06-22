console.log("Всем привет!");
console.error("Сообщение об ощибке");
console.warn("Сообщение-предупреждение");

function notReadyAlert() {
    alert('Sorry, not ready yet!\nИзвините, еще не готово!');
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'НИ СЫ') {
        productNumber = 0;
    } else if (name == 'НE НОЙ') {
        productNumber = 1;
    } else if (name == 'НИ ЗЯ') {
        productNumber = 2;
    } else {
        alert ('Товар не найден');
    }

    let cards = document.getElementsByClassName('card');
    let card = cards = cards [productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}
function loaded () {
    let searchbox = document.getElementById('seatch');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });
}