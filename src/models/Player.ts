export class Player {
    name: string;
    seat: number;
    score: number;
    money: number;

    constructor(name: string, seat: number, score: number, money: number){
        this.name = name;
        this.seat = seat;
        this.score = score;
        this.money = money
    };

    toString(): string{
        return `${this.name} sits at seat ${this.seat} and has a score of ${this.score}`;
    };

    changeScore(pointDelta: number): void{
        this.score += pointDelta;
    };

    changeMoney(moneyDelta: number): void{
        this.money += moneyDelta;
    };
};