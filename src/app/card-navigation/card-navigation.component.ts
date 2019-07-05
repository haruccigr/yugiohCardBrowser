import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Card} from '../Card.model';
import {deckData} from '../data';
import {GetCardService} from '../get-card.service';

@Component({
  selector: 'app-card-navigation',
  templateUrl: './card-navigation.component.html',
  styleUrls: ['./card-navigation.component.css']
})

export class CardNavigationComponent implements OnInit {

  deck: Card[] = new Array(20);   // the deck info fetched from the API
  active: boolean[];              // array that shows what deck card is active 

  @Output() clicked: EventEmitter<Card> = new EventEmitter();         // an event fired when a
                                                                      // a card is clicked

  constructor(private getCardService: GetCardService) {}

  ngOnInit() {
    
    // get the card data from the API
    for(let i=0; i<this.deck.length; i++){
      this.getCardService.getCardByTitle(deckData[i]).subscribe(data=>{
        this.deck[i] = data;
      },
      error=>{
        console.log("get ERROR");
      });
    }

    // init active array
    this.active = new Array<boolean>(20);

    for(let i of this.active){
      i = false;
    }
  }


  /**
   * 
   * @param item the nav card clicked
   * @param i the index in the deck
   * 
   * @returns nothing.
   * 
   * This function is fired when the user clicks a card. It sends an event
   * to its father component (appComponent) to notify him that the user clicked
   * a card. It also passes the data of the card to its father, so the father can 
   * then pass it to the cardContentComponent.
   * 
   */


  toggleView(item: any, i: number): void{

    this.clicked.emit(item);
    
    // clear the previous active
    for(let j=0; j<this.active.length; j++){
      this.active[j] = false;
    }

    // make current item active
    this.active[i] = true;
  }

}
