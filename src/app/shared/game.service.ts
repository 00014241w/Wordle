import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private http = inject(HttpClient);
  pressedKey = new Subject<string>();
  secretWord = new BehaviorSubject<string>('');


  getWord(){
    this.http.get('https://random-word-api.herokuapp.com/word?length=5').subscribe(word =>{
      this.secretWord.next(word.toString());
    });
  }
}
