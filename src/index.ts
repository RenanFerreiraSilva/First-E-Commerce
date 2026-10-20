import { User } from './models/User';
import { Product } from './models/Product';
import { usersDatabase } from './database/userDataBase';

console.log("INICIANDO TESTES DO E-COMMERCE\n");

const usuario1 = new User("1", "Renan Santos", "renansantos", "renan@email.com");
const usuario2 = new User("2", "Mariah Santos", "mariahsantos", "mariah@email.com");

usersDatabase.push(usuario1, usuario2);
console.log("1. Utilizadores cadastrados na base de dados:");
console.log(usersDatabase);
console.log("--------------------------------------------------\n");

const produto1 = new Product("p1", "Teclado Mecânico", 250);
const produto2 = new Product("p2", "Mouse Gamer", 150);

console.log("2. A adicionar produtos ao carrinho...");
usuario1.addToCart(produto1);
usuario1.addToCart(produto2);

console.log("\n--- Carrinho do Renan ---");
console.log(usuario1.showProducts());
console.log("--------------------------------------------------\n");

console.log("3. Testando comentários e avaliações nos produtos:");
produto1.comment("Excelente teclado, respostas muito rápidas!", usuario1);
produto1.rate(5, usuario1);

produto2.comment("Mouse muito confortável para usar o dia todo.", usuario2);
produto2.rate(4, usuario2);
console.log("--------------------------------------------------\n");

console.log("4. Removendo um produto do carrinho:");
usuario1.removeFromCart(produto2);

console.log("\n--- Carrinho do Renan após remoção ---");
console.log(usuario1.showProducts());