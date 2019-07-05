import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'yugioh-card-browser';
  cardName = null;              // local variable that is used to store the output got from
                                        // cardNavigationComponent


  /**
   * 
   * @param item the item data that the user clicked on the cardNavigationCompontent
   * 
   * @returns nothing.
   * 
   * It is fired when the user clicks a card in cardNavigationComponent.
   * Sets the local's variable value, so as to then pass this value as an Input
   * to the cardContentComponent.
   * 
   */


  toggleContent(item:any): void{
    this.cardName = item;
  }
}
