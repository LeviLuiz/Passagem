function calcular() {
    price = document.getElementById('price').value
    pessoas = document.getElementById('pessoas').value
    free = document.getElementById('free').value
    res = document.getElementById('res')

    if (price == 0 || pessoas == 0 || free > pessoas) {
        alert('Insira valores Válidos')
    } else {
    soma = price * pessoas
    total = soma - price * free
    
    res.innerHTML = `R$ ${total}`
    res.style.display = 'block'
    }
}