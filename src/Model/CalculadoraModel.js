const NAO_LIMPAR_TELA = false
const LIMPAR_TELA = true

export default class CalculadoraModel {
    #valor = ''
    #acumulator = ''
    #limparTela = false
    #operacao = ''

    constructor(valor = null, acumulator = null, operacao = null, limparTela = false){
       this.#valor = valor
       this.#acumulator = acumulator
       this.#limparTela = limparTela
       this.#operacao = operacao   

    }

    get valor() {
        return this.#valor?.replace('.', ',') || '0'
    }
    
    numeroDigitado(novoValor = '') {
        return new CalculadoraModel(
            (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
            this.#acumulator,
            this.#operacao,
            NAO_LIMPAR_TELA,


        )
    }

    pontoDigitado() {
        return new CalculadoraModel(
            this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
            this.#acumulator,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }

    limpar() {
        return new CalculadoraModel(

        )
    }

    operacaoDigitada(proximaOperacao){
        return this.calcular(proximaOperacao)
    }

    calcular(proximaOperacao = null) {
        const acumulator = !this.#operacao
            ? parseFloat(this.#valor)
            : eval(`${this.#acumulator} ${this.#operacao} ${this.#valor}`)
        const valor = !this.#operacao ? this.#valor : `${acumulator}`

        return new CalculadoraModel(
            valor,
            acumulator,
            proximaOperacao,
            proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA
        )
    }

}

const calc = new CalculadoraModel()
calc.valor