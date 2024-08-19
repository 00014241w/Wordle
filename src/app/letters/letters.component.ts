import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GameService} from "../shared/game.service";

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [],
  templateUrl: './letters.component.html',
  styleUrl: './letters.component.scss'
})
export class LettersComponent implements OnInit {
  private gameService = inject(GameService);
  private destroyRef = inject(DestroyRef);
  wordLength: number = 5;
  numberOfAttempts: number = 6;
  secretWord!: string;
  enteredLetters: string[] = [];

  ngOnInit() {
    this.gameService.getWord();
    const subscription = this.gameService.secretWord.subscribe(word => {
      this.secretWord = word;
      console.log(this.secretWord);
      this.createSecretWordArr(this.secretWord);
    });
    this.printLetter();
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  createSecretWordArr(word: string){
    const wordArr = word.split('');
    console.log(wordArr);
  }

  printLetter() {
    const subscription = this.gameService.pressedKey.subscribe(letter => {
      this.enteredLetters.push(letter);
      if (this.enteredLetters.length > 5) {
        console.log(this.enteredLetters);
      }
      this.enteredLetters = [];
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
