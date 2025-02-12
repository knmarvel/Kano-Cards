import { CardInterface } from './interfaces';
import { suitLookup as suitLookup } from '../helpers';

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

    toHTML(): HTMLDivElement{
        // Create Card HTML Element
        const playingCard: HTMLDivElement = document.createElement('div');
        // Add Classes to Card
        playingCard.classList.add(
            `card`, 
            `playing-card`, 
            `suit-${this.suit}`, 
            `rank-${this.rank}`,
            `edition-${this.edition}`,
            `enhancement-${this.enhancement}`,
            `seal-${this.seal}`
        );

        // Display Card Rank
        const playingCardRank: HTMLDivElement = document.createElement('div');
        playingCardRank.innerHTML = this.rank;
        playingCardRank.classList.add('rank');
        playingCard.appendChild(playingCardRank);
        
        // Display Card Face
        const playingCardPicture: HTMLDivElement = document.createElement('div');

        // of ${suitLookup[this.suit]['symbol']}
        if(!this.isFaceCard){
            console.log(`this is not a face card, this is a(n) ${this.rank} `);
            for (let i = 0; i < +this.rank ; i++){
                playingCardPicture.innerHTML += suitLookup[this.suit]['symbol'];
            }
        } else {playingCardPicture.innerHTML = this.rank;}
        playingCardPicture.classList.add('picture');
        playingCard.appendChild(playingCardPicture);

        return playingCard;
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

