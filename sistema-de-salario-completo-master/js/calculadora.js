// declarando variaveis entrada de dados
var salario = document.querySelector('#sal')
var horaExtra = document.querySelector('#horaExtra')
var faltas = document.querySelector('#horaFaltas')
var dependentes = document.querySelector('#dependentes')
var vt = document.querySelector('#checkvt')
//valores fixos
var salarioFinal = 0
var inssPago = 0
var vtValor = 0
var valorExtra = 0
var valorFalta = 0
var horaTrabalho = 220
var irrf = 0

//resultados
var salariobase = document.querySelector('#ressalario')
var resSalario = document.querySelector('#salarioliquido')
var resExtra = document.querySelector('#resextra')
var resFaltas = document.querySelector('#descontofaltas')
var inss = document.querySelector('#descontoINSS')
var resIRRF = document.querySelector('#descontoIRRF')
var resvt = document.querySelector('#desconto-vale-transporte')

// função principal
function calcularSalario() {
    if (salario.value == 0) {
        alert(`Digite seu salario`)
    } else {
        calculoDeSalario()
        salarioFinal = salario.value-inssPago-vtValor-valorFalta-irrf+valorExtra
        inss.innerHTML = inssPago.toFixed(2).toString().replace(".", ",")
        salariobase.innerHTML = salario.value+',00'
        resSalario.innerHTML = `R$ ${salarioFinal.toFixed(2).toString().replace(".", ",")}`

        document.querySelector('#sal').innerHTML = ' '
        document.querySelector('#sal').focus()
        function calculoDeSalario() {
            calcularHFalta()
            calcularHExtra()
            calcularVt()
            calcularInss()
            calcularIRRF()
        }
        function calcularIRRF() {
            let salarioBaseIRRF = salario.value-valorFalta-inssPago+valorExtra
            let valorAliquotaIRRF = [0, 69.20, 138.66, 205.57]
            let salarioDescontoIRRF = [0, 1903.98,  2826.65, 3751.05, 4664.69]
            let AliquotaIRRF = [0, 0.075, 0.15, 0.225, 0.275]
            if (dependentes == '' ) {
                var quantDependentes = 0
            } else {
                quantDependentes = parseFloat(dependentes.value*179.71)
            }
            if (salarioBaseIRRF<=salarioDescontoIRRF[1] ) {
              resIRRF.innerHTML = `0`
            } 
            else 
            {
              let salarioAjustado = salarioBaseIRRF-quantDependentes
              if (salarioAjustado <= salarioDescontoIRRF[1]) {
                resIRRF.innerHTML = `isento`
              }
              else if (salarioAjustado<=salarioDescontoIRRF[2]) {
                salarioAjustado = salarioAjustado-salarioDescontoIRRF[1]
                irrf = salarioAjustado*AliquotaIRRF[1] 
                resIRRF.innerHTML = irrf.toFixed(2).toString().replace(".", ",") 
              } 
              else if (salarioAjustado<=salarioDescontoIRRF[3]) {
                salarioAjustado = salarioAjustado-salarioDescontoIRRF[2]
                irrf = salarioAjustado*AliquotaIRRF[2]+valorAliquotaIRRF[1]
                resIRRF.innerHTML = irrf.toFixed(2).toString().replace(".", ",")
              } 
              else if (salarioAjustado<=salarioDescontoIRRF[4]) {
                salarioAjustado = salarioAjustado-salarioDescontoIRRF[3]
                irrf = salarioAjustado*AliquotaIRRF[3]+valorAliquotaIRRF[1]+valorAliquotaIRRF[2] 
                resIRRF.innerHTML = irrf.toFixed(2).toString().replace(".", ",")
              }  
              else {
                salarioAjustado = salarioAjustado-salarioDescontoIRRF[4]
                irrf = salarioAjustado*AliquotaIRRF[4]+valorAliquotaIRRF[1]+valorAliquotaIRRF[2]+valorAliquotaIRRF[3] 
                resIRRF.innerHTML = irrf.toFixed(2).toString().replace(".", ",")
              } 
            } 
        }
        function calcularVt() {
            if (vt.checked){
                vtValor = salario.value*0.06
                resvt.innerHTML = vtValor.toFixed(2).toString().replace(".", ",")
            } else {
                resvt.innerHTML = '0'
            }
        }
        function calcularHFalta() {
            if (faltas.value > 0)  {
                valorFalta = salario.value/horaTrabalho*faltas.value
                resFaltas.innerHTML = valorFalta.toFixed(2).toString().replace(".", ",")
            } else {
                resFaltas.innerHTML = '0'
            }
        }
        function calcularHExtra() {
            if (horaExtra.value > 0) {
                let extraBase = salario.value/horaTrabalho*horaExtra.value
                valorExtra = extraBase*0.5+extraBase
                resExtra.innerHTML = valorExtra.toFixed(2).toString().replace(".", ",")
            } else {
               resExtra.innerHTML = '0' 
            }
        }
        function calcularInss() {
                let salarioFormat = salario.value
                let inssFaixa = [1045.00, 2089.60, 3134.40, 6101.06]
                let faixa = [0.075, 0.09, 0.12, 0.14]
                let inssdeduzir = [0, 15.67, 78.36, 141.05]
            if (salarioFormat <= inssFaixa[0]) {
                let inssAliquota = salarioFormat * faixa[0]
                inssPago = inssAliquota - inssdeduzir[0]
            }
            else if (salarioFormat <= inssFaixa[1]) {
                let inssAliquota = salarioFormat * faixa[1]
                inssPago = inssAliquota - inssdeduzir[1]
            }
            else if (salarioFormat <= inssFaixa[2]) {
                let inssAliquota = salarioFormat * faixa[2]
                inssPago = inssAliquota - inssdeduzir[2]
            }
            else if (salarioFormat <= inssFaixa[3]) {
                let inssAliquota = salarioFormat * faixa[3]
                inssPago = inssAliquota - inssdeduzir[3]
            }
            else if (salarioFormat > inssFaixa[3]) {
                inssPago = 713.10
            }
        }
    }    
}