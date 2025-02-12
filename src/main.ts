import './style/style.css'
import { setupCounter } from './counter.ts'
import { Card } from './models/Card.ts'

const gameArea = document.querySelector<HTMLDivElement>('#app')!

gameArea.innerHTML = `
  <div>
    <h1>Kano's Cards</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="pull-card" type="button"></button>
    </div>
  </div>
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function setupPullCard(): void{
  const pullCard = () =>{
    console.log("Pulling an Ace of Spades");
    const card = new Card("A", "Ace", "spades", 11, "none", "none", "Base");
    document.querySelector<HTMLDivElement>("#app")!.appendChild(card.toHTML());
  }
  
  const cardButton = document.querySelector<HTMLButtonElement>("#pull-card")!;
  cardButton.innerHTML = "Pull Card";
  cardButton.addEventListener("click", pullCard);

}

setupPullCard();


