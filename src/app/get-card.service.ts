import { Injectable } from '@angular/core';
import {Card} from './Card.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetCardService {

  private readonly proxy = ' https://cors-anywhere.herokuapp.com';          // proxy to bypass CORS errors
  private readonly get_endpoint = 'http://yugiohprices.com/api/card_data';  // the endpoint of the API

  
  constructor(private http: HttpClient) { }


  /**
   * 
   * @param title the title of the card to be fetched
   * 
   * 
   * @returns an Observable of type Card.
   * 
   * It gets as an argument the title of the card to be fetched,
   * and returns the data fetched from the API.
   * 
   */



  getCardByTitle(title: string): Observable<Card>{

    const headerDict = {
      'Content-Type': 'application/json'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get<Card>(`${this.proxy}/${this.get_endpoint}/${title}`,requestOptions);
  }
}
