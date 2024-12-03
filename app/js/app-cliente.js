let clienteController = new ClienteController();
const cliente1 = new Cliente('1', '100');
const cliente2 = new Cliente('2', '200');
const cliente3 = new Cliente('3', '300');
clienteController.inserirClienteNoHTML(cliente1);
clienteController.inserirClienteNoHTML(cliente2);
clienteController.inserirClienteNoHTML(cliente3);
