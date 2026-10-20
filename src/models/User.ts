import { Product } from "./Product";

export class User {
    private cart: Product[] = [];
    constructor(private id: string, public name: string, public username: string, public email: string) {};

    public addToCart(produto: Product): void {
        this.cart.push(produto);
    };

    public removeFromCart(product: Product): void {
        const index = this.cart.indexOf(product);
        if(index !== -1) {
            this.cart.splice(index, 1);
        };
    };

    public showProducts(): string {
        if(this.cart.length === 0) {
            return `Carrinho vazio.`;
        };
        return this.cart.map(p => p.show()).join('\n');
    };
};