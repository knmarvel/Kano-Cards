import './style/style.css'
import { setupCounter } from './counter.ts'
import { DeckBuilderInterface } from './models/interfaces.ts'
import { Deck } from './models/Deck.ts'
import { Card } from './models/Card.ts'

const gameArea = document.querySelector<HTMLDivElement>('#app')!

gameArea.innerHTML = `
  <div>
    <h1>Kano's Cards</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="shuffle-card" type="button"></button>
      <button id="pull-card" type="button"></button>
    </div>
  </div>
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function setupDeck(): Deck{
  const deckBuilder: DeckBuilderInterface = {
    name: "Standard 54",
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    ranksNamesChips:  {
        '2': ['Two', 2],
        '3': ['Three', 3],
        '4': ['Four', 4],
        '5': ['Five', 5],
        '6': ['Six', 6],
        '7': ['Seven', 7],
        '8': ['Eight', 8],
        '9': ['Nine', 9],
        '10': ['Ten', 10],
        'J': ['Jack', 10],
        'Q': ['Queen', 10],
        'K': ['King', 10],
        'A': ['Ace', 11]
    },
    numJokers: 2
  }
  const deck = new Deck("Standard 54", "none", "none", "none", "none", deckBuilder);
  return deck;
} 


function setupPullCard(): void{
  const pullCard = () =>{
    const card: Card = deck.pullCard();
    console.log(`Pulling a(n) ${card.toString()}`);
    document.querySelector<HTMLDivElement>("#app")!.appendChild(card.toHTML());
  }
  

  const deck: Deck = setupDeck();

  const shuffleButton = document.querySelector<HTMLButtonElement>("#shuffle-card")!;
  shuffleButton.innerHTML = "Shuffle Cards";
  shuffleButton.addEventListener("click", deck.shuffle);

  const cardButton = document.querySelector<HTMLButtonElement>("#pull-card")!;
  cardButton.innerHTML = "Pull Card";
  cardButton.addEventListener("click", pullCard);

}

setupPullCard();


