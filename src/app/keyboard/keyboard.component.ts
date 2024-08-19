import {Component, inject} from '@angular/core';
import {Button} from "primeng/button";
import {GameService} from "../shared/game.service";

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {
  keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['Back', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter']
  ];
  pressedKeys: string[] = [];
  private gameService = inject(GameService);

  public get width() {
    return window.innerWidth;
  }

  onKeyPress(letter: string) {
    this.pressedKeys.push(letter);
    if (this.pressedKeys.length > 5) {
      this.printWord();
      this.pressedKeys = [];
    }
    this.gameService.pressedKey.next(letter);
  }

  printWord() {
    if (this.pressedKeys[5] === 'Enter') {
      const enteredWord = this.pressedKeys.toString().replaceAll(',', '').replace('Enter', '');
      console.log(enteredWord);
    }
  }

  onEnter(){

  }

  onBack(){

  }
}
