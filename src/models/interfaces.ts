import { Card } from "./Card";

export interface CardInterface {
    rank: string;
    name: string;
    suit: string;
    chipValue: number;
    enhancement: string;
    seal: string;
    edition: string;
}

export interface DeckBuilderInterface {
    name: string;
    suits: string[];
    ranksNamesChips: {[key: string]: [name: string, chipValue: number]};
    numJokers?: number;
}

export interface DeckInterface {
    name: string;
    backDesign: string;
    border: string;
    finish: string;
    stock: string;
    deckBuilder: DeckBuilderInterface;
    cards: Card[];
}

export interface PlayerInterface {}
export interface GameInterface {}
export interface RulesInterface {}