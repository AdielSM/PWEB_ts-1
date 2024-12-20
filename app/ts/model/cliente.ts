class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta = null) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(conta) {
        this._conta = conta;
    }

    toString(): string {
        return `Nome: ${this._nome}, CPF: ${this._cpf}`;
    }
    
}