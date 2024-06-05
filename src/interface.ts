class Conta {
    numeroDaConta: number;
    saldo: number;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = 0;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
    taxaTransferencia: number = 0;

    transferir(valor: number, destinatario: Conta): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            destinatario.saldo += valor;
            return true;
        } else {
            return false;
        }
    }
}


