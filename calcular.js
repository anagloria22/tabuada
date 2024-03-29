function calcular() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itabuada')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)   
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}