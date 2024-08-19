import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
