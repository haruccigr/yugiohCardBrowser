import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../Card.model';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  @Input() card: Card = null;          // an input that will be gotten from the father component (appComponent)
  imgSrc: string;
  
  constructor() { }

  ngOnInit() {
    this.imgSrc = "http://yugiohprices.com/api/card_image/";
  }

}
