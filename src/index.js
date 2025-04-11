"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RT3_1 = require("./libs/submodulo/CalculadoraClass/CalculadoraClass/operacoesmatematicas");
const somar = new RT3_1.Somador();
const somado = somar.calcular(3, 2);
const subtrair = new RT3_1.Subtrador();
const subtraido = subtrair.calcular(5, 4);
const multiplicar = new RT3_1.Multiplicador();
const multiplicado = multiplicar.calcular(2, 8);
const dividir = new RT3_1.Divisor();
const dividido = dividir.calcular(9, 3);
console.log(`3 + 2 dará: ${somado}`);
console.log(`5 - 4 dará: ${subtraido}`);
console.log(`2 * 8 dará: ${multiplicado}`);
console.log(`9 / 3 dará: ${dividido}`);