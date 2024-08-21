import {Component, inject} from '@angular/core';
import {Button} from "primeng/button";
import {GameService} from "../shared/game.service";
import {BehaviorSubject} from "rxjs";

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
  // pressedKey = new BehaviorSubject<string>('');
  private gameService = inject(GameService);

  public get width() {
    return window.innerWidth;
  }

  onKeyPress(letter: string) {
    this.gameService.pressedKey.next(letter);
  }

  onEnter(){
    // this.gameService.pressedKey.next('Enter');
  }

  onBack(){
    this.gameService.pressedKey.next('Back');
  }
}
