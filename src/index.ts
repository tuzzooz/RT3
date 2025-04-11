import { Somador,Subtrador, Divisor, Multiplicador } from '../libs/submodulo/CalculadoraClass/CalculadoraClass/operacoesmatematicas';


const somar = new Somador()
const somado = somar.calcular(3,2)

const subtrair = new Subtrador()
const subtraido = subtrair.calcular(5,4)

const multiplicar = new Multiplicador()
const multiplicado = multiplicar.calcular(2,8)

const dividir = new Divisor()
const dividido = dividir.calcular(9,3)

console.log(`3 + 2 dará: ${somado}`)
console.log(`5 - 4 dará: ${subtraido}`)
console.log(`2 * 8 dará: ${multiplicado}`)
console.log(`9 / 3 dará: ${dividido}`)