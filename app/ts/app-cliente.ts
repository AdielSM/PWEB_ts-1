let clienteController = new ClienteController();

const clientes = new Clientes();


const cliente1 = new Cliente('1', '100');
const cliente2 = new Cliente('2', '200');
const cliente3 = new Cliente('3', '300');

clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

console.log(clientes.listar());

console.log(clientes.listar());

console.log(clientes.pesquisar('200'));