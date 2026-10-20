import { User } from "./User";
import { Comment } from './Comment';
import { Rating } from './Rating';

export class Product {
    private comments: Comment[] = [];
    private ratings: Rating[] = [];

    constructor(private id: string, public name: string, public value: number) { };

    public show(): string {
        return `O produto ${this.name} está saindo por R$${this.value}.`;
    };

    private showDetails(): string {
        return `ID: ${this.id} | Nome: ${this.name} | Valor: R$${this.value}.`;
    };

    public comment(content: string, user: User): void {
        const commentId = `c_${Date.now()}`;

        const newComment = new Comment(commentId, content);

        this.comments.push(newComment);

        console.log(`O usuário ${user.username} comentou no produto ${this.name}: "${content}"`);

    };

    public rate(rateValue: number, user: User): void {
        const ratingId = `r_${Date.now()}`;

        const newRating = new Rating(ratingId, rateValue);
        this.ratings.push(newRating);

        console.log(`O usuário ${user.username} avaliou o produto ${this.name} com nota ${rateValue}`);
    };
};