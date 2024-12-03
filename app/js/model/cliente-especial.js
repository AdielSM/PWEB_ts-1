class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta = null) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    get dependentes() {
        return this._dependentes;
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
        this._dependentes = this._dependentes.filter(dependente => dependente.cpf !== cpf);
    }
    toString() {
        return `${super.toString()}, Dependentes: ${this._dependentes.map(dep => dep.nome).join(", ")}`;
    }
}
