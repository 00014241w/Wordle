import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private http = inject(HttpClient);
  pressedKey = new Subject<string>();
  secretWord = new BehaviorSubject<string>('');


  getWord(): Observable<string> {
    return this.http.get<string[]>('https://random-word-api.herokuapp.com/word?length=5').pipe(map(word => word[0].toString()));
  }
}
