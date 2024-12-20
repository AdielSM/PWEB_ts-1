class Clientes{

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente) {
        this._clientes.push(cliente);
    }

    pesquisar (cpf: string): Cliente {
        return this._clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    remover(cpf: string) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this._clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }
}