import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from 'src/app/games/model/game';

@Component({
  selector: 'app-form-price',
  templateUrl: './form-price.component.html',
  styleUrls: ['./form-price.component.css']
})

export class FormPriceComponent {
  @Input()
  game: Game = new Game();

  form: FormGroup = new FormGroup({
    count: new FormControl(1)
  })
  @Output()
  shop_game: EventEmitter<any> = new EventEmitter()

  onShopGame() {
    this.shop_game.emit(this.form.value.count)
  }
}
