let data = new Date
let hora= data.getHours()
let minutos= data.getMinutes()
let dia = data.getDate()
let dollar = document.querySelector('#ndolar')
let body= document.getElementsByName('body')
let real = document.querySelector('#nreal')
let resultado = document.getElementById('resultado')
let cotacao = document.getElementById('cotacao')
let cotacaoDolar = 'R$4,98'
let diaCotacao = `Hoje dia ${dia} às ${hora}:${minutos} o Dolar esta cotado a ${cotacaoDolar}.`
cotacao.textContent = diaCotacao
function changeBackground() { 
    if (hora <=1) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/umahora.jpg')"
    } else if (hora <=2) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/duashoras.jpg')"
    } else if (hora <=3) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/treshoras.jpg')"
    } else if (hora <=4) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/quatrohoras.jpg')"   
    } else if (hora <=5) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/cincohoras.jpg')"
    } else if (hora <=6) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/seishoras.jpg')"
    } else if (hora <=7) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/setehoras.jpg')"
    } else if (hora <=8) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/oitohoras.jpg')"
    } else if (hora <=9) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/novehoras.jpg')"
    } else if (hora <=10) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/dezhoras.jpg')" 
    } else if (hora <=11) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/onzehoras.jpg')"
    } else if (hora <=12) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/meiodia.jpg')"
    } else if (hora <=14) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/colina.jpg')"
    } else if (hora <=15) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/colina.jpg')"
    } else if (hora <=16) {
        document.body.style.backgroundImage = "url(/dollar-real-master/imagens/sky-at-sunset.jpg)"
    } else if (hora <=17) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/colina.jpg')"
    } else if (hora <=18) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/colina.jpg')"
    } else if (hora <=19) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/desenovehoras.jpg')"
    } else if (hora <=20) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/vintehoras.jpg')"
    } else if (hora <=21) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/vinteumahoras.jpg')"
    } else if (hora <=22) {
       document.body.style.backgroundImage = "url('/dollar-real-master/imagens/colina.jpg')"
    } else if (hora <=23) {
        document.body.style.backgroundImage = "url('/dollar-real-master/imagens/sky-at-sunset.jpg')"
 }}
//funçoes que estou usando no momento
function converter() {
    let resu = dollar.value*4.98
    let resulFinal = resu.toFixed(2)
    if (dollar.value == 0 ) {
        alert(`digite um valor`)
    } else {
        resultado.innerHTML = `R$${dollar.value} hoje é o mesmo que $${resulFinal}`
        dollar.value = ''
        dollar.focus()           
    }
}