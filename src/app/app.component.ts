import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {LettersComponent} from "./letters/letters.component";
import {KeyboardComponent} from "./keyboard/keyboard.component";
import {GridComponent} from "./grid/grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LettersComponent, KeyboardComponent, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Wordle';
}
