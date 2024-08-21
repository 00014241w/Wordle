import {Component, DestroyRef, inject, OnInit, SimpleChanges} from '@angular/core';
import {CellComponent} from "./cell/cell.component";
import {GameService} from "../shared/game.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CellComponent
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  currentGuess: string[] = ['', '', '', '', ''];
  currentIndex: number = 0;
  secretWord!: string;
  private gameService = inject(GameService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.gameService.getWord().subscribe(word => {
      console.log(word);
    })

    const subscription = this.gameService.pressedKey.subscribe(letter => {
      if (letter === 'Back' && this.currentIndex > 0) {
        this.currentGuess[this.currentIndex - 1] = '';
        this.currentIndex--;
      } else if (letter === 'Back') {
        return;
      } else if (this.currentIndex < 5) {
        this.currentGuess[this.currentIndex] = letter;
        this.currentIndex++;
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  getSecretWord (){
    this.gameService.getWord()
  }
}
