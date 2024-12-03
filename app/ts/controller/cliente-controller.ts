class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");
        this.clientes = new Clientes();

        const form = document.querySelector("#formCliente");
        form.addEventListener("submit", (event) => this.inserir(event));
    }

    inserir(event: Event) {
        event.preventDefault();
        const novoCliente = new Cliente(
            this.inputNome.value,
            this.inputCpf.value
        );

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
        this.limparFormulario();
    }

    listar() {
        this.clientes.listar().forEach((cliente) => {
            this.inserirClienteNoHTML(cliente);
        });
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement("p");
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement("button");
        botaoApagar.textContent = "X";
        botaoApagar.addEventListener("click", () => {
            this.clientes.remover(cliente.cpf);
            elementoP.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.querySelector("#listaClientes").appendChild(elementoP);
    }

    limparFormulario() {
        this.inputNome.value = "";
        this.inputCpf.value = "";
        this.inputConta.value = "";
    }
}
