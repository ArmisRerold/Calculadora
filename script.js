document.addEventListener('keydown', function (event) {
    result = document.getElementsByClassName('resultI')[0]
    v1 = document.getElementsByClassName('v1I')[0]
    v2 = document.getElementsByClassName('v2I')[0]
    op = document.getElementsByClassName('opI')[0]
    tecla = event.key
    if (event.key == '*') {
        tecla = 'x'
    }
    if (event.key == 'Enter' || event.key == '=') {
        calcular()
    } else {
        teclar(tecla)
    }
    if (event.key == 'Delete') {
        reset()
    }
    if (event.key == 'Backspace') {
        if (result.value == '') {
            if (v1.value != '' && op.value == '' && v2.value == '') {
                valor = String(v1.value)
                v1.value = valor.slice(0, valor.length - 1)
                document.getElementsByClassName('v1')[0].innerText = String(v1.value)
                console.log(v1.value)
            } else if (op.value != '' && v2.value == '') {
                op.value = ''
                document.getElementsByClassName('op')[0].innerText = ''
            } else if(v1.value != '' && op.value != '') {
                valor = String(v2.value)
                v2.value = valor.slice(0, valor.length - 1)
                document.getElementsByClassName('v2')[0].innerText = String(v2.value)
                console.log(v2.value)
            }
        }}
    })

function fatiaStr(str, final) {
    var palavra = ''
    for (var c = 0; c <= final; c++) {
        palavra += srt[c]
    }
}

function botao() {
    getElementsByClassName('tecla')[0].color = 'black'
}


function isNumber(n) {
    return !isNaN(n);
}
function tecladoFisico() {
    console.log('sss')
}
function teclar(tecla) {
    if (document.getElementsByClassName('resultI')[0].value === '') {
        if (isNumber(tecla)) {
            if (document.getElementsByClassName('opI')[0].value == '') {
                document.getElementsByClassName('v1')[0].innerText += tecla
                document.getElementsByClassName('v1I')[0].value += tecla
            }
            if (document.getElementsByClassName('opI')[0].value != '' && document.getElementsByClassName('resultI')[0].value == '') {
                document.getElementsByClassName('v2')[0].innerHTML += tecla
                document.getElementsByClassName('v2I')[0].value += tecla
            }
        } else if (tecla == '+' || tecla == '-' || tecla == 'x' || tecla == '/') {
            if (document.getElementsByClassName('v1I')[0].value != '' && document.getElementsByClassName('resultI')[0].value == '' && document.getElementsByClassName('v2I')[0].value == '') {
                document.getElementsByClassName('op')[0].innerHTML = tecla
                document.getElementsByClassName('opI')[0].value = tecla
            }
        }
    }


}

function calcular() {
    if (document.getElementsByClassName('v1I')[0].value != '') {
        var v1 = Number(document.getElementsByClassName('v1I')[0].value)
        var v2 = Number(document.getElementsByClassName('v2I')[0].value) ?? 0
        var op = document.getElementsByClassName('opI')[0].value
        var resultado = document.getElementsByClassName('result')[0].innerText
        document.getElementsByClassName('sinalResultado')[0].innerText = '='

        if (op == '+') {
            document.getElementsByClassName('result')[0].innerText = v1 + v2
            document.getElementsByClassName('resultI')[0].value += String(Number(v1 + v2))
        } else if (op == '-') {
            document.getElementsByClassName('result')[0].innerText = v1 - v2
            document.getElementsByClassName('resultI')[0].value += String(Number(v1 - v2))
        } else if (op == 'x') {
            document.getElementsByClassName('result')[0].innerText = v1 * v2
            document.getElementsByClassName('resultI')[0].value = String(Number(v1 * v2))
        } else {
            document.getElementsByClassName('result')[0].innerText = v1 / v2
            document.getElementsByClassName('resultI')[0].value += String(Number(v1 / v2))
        }
    }
}

function reset() {
    document.getElementsByClassName('v1')[0].innerText = ''
    document.getElementsByClassName('v1I')[0].value = ''
    document.getElementsByClassName('v2')[0].innerText = ''
    document.getElementsByClassName('v2I')[0].value = ''
    document.getElementsByClassName('op')[0].innerText = ''
    document.getElementsByClassName('opI')[0].value = ''
    document.getElementsByClassName('result')[0].innerText = ''
    document.getElementsByClassName('resultI')[0].value = ''
    document.getElementsByClassName('sinalResultado')[0].innerText = ''
}