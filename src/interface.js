"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = 0;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            destinatario.saldo += valor;
            return true;
        }
        else {
            return false;
        }
    }
}
