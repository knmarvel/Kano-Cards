import { CardInterface } from './interfaces';

export class Card implements CardInterface {
    rank: string;
    name: string;
    suit: string; 
    chipValue: number; 
    enhancement: string; 
    seal: string; 
    edition: string;
    private _isFaceCard: boolean;
    deltaCount: number;

    constructor(
        rank: string, 
        name: string, 
        suit: string, 
        chipValue: number, 
        enhancement?: string, 
        seal?: string, 
        edition?: string,
        isFaceCard?: boolean,
    
    ) {
            this.rank = rank;
            this.name = name;
            this.suit = suit;
            this.chipValue = chipValue;
            this.enhancement = enhancement ? enhancement : 'none';
            this.seal = seal ? seal : 'none';
            this.edition = edition ? edition : 'Base';
            this._isFaceCard = isFaceCard !== undefined ? isFaceCard: this.determineIfFaceCard();
            this.deltaCount = 0;
    }

    toString(): string{
        return `${this.name} of ${this.suit}`;
    }

    private determineIfFaceCard(): boolean {
        return this.rank === 'J' || this.rank === 'Q' || this.rank === 'K';
    }

    get isFaceCard(): boolean {
        if (this._isFaceCard) {
            return this._isFaceCard;
        }
        return this.determineIfFaceCard();
    }

    changeChipValue(chipValueDelta: number): void{
        this.deltaCount += 1;
        this.chipValue += chipValueDelta;
    }

    changeEnhancement(enhancementDelta: string): void{
        this.deltaCount += 1;
        this.enhancement = enhancementDelta;
    }

    changeEdition(editionDelta: string): void{
        this.deltaCount += 1;
        this.edition = editionDelta;
    }

};

