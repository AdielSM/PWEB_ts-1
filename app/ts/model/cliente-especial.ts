class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta = null) {
        super(nome, cpf, conta);
        this._dependentes = new Array<Cliente>();
    }

    get dependentes(): Cliente[] {
        return this._dependentes;
    }

    adicionarDependente(dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    removerDependente(cpf: string): void {
        this._dependentes = this._dependentes.filter(dependente => dependente.cpf !== cpf);
    }

    toString(): string {
        return `${super.toString()}, Dependentes: ${this._dependentes.map(dep => dep.nome).join(", ")}`;
    }
}