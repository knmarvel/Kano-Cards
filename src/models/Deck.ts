import { DeckInterface, DeckBuilderInterface } from './interfaces'
import { Card } from './Card';

export class Deck implements DeckInterface{
    name: string;
    backDesign: string;
    border: string;
    finish: string;
    stock: string;
    deckBuilder: DeckBuilderInterface;
    cards: Card[] = [];

    constructor(name: string, backDesign: string, border: string, finish: string, stock: string, deckBuilder: DeckBuilderInterface){
        this.name = name;
        this.backDesign = backDesign;
        this.border = border;
        this.finish = finish;
        this.stock = stock;
        this.deckBuilder = deckBuilder;
        this.cards = this.createDeck();
    }

    toString(): string{
        return `Deck: ${this.name}`;
    }

    private createDeck(): Card[]{
        let cards: Card[] = [];
        for (let suit of this.deckBuilder.suits){
            for (let rank in this.deckBuilder.ranksNamesChips){
                let card = new Card(rank, this.deckBuilder.ranksNamesChips[rank][0], suit, this.deckBuilder.ranksNamesChips[rank][1]);
                cards.push(card);
            }
        }
        if (this.deckBuilder.numJokers && this.deckBuilder.numJokers > 0){
            for (let i = 0; i < this.deckBuilder.numJokers; i++){
                let card = new Card('Joker', 'Joker', 'Joker', 0);
                cards.push(card);
            }
        }
        return cards;
    }

    pullCard(): Card{
        const card = this.cards.pop() as Card;
        return card;
    }

    shuffle = (): void => {
        let originalCards: Card[]= [...this.cards];
        let shuffledCards: Card[] = [];
        while (originalCards.length > 0){
            let randomIndex: number = Math.floor(Math.random() * (originalCards.length));
            let card: Card = originalCards[randomIndex];
            shuffledCards.push(card);
            originalCards.splice(randomIndex, 1);
        }
        this.cards = [...shuffledCards];
    }
    
};