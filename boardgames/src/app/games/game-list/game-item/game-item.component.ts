import { Component, Input } from '@angular/core';
import { Game } from '../../model/game';
import { CartItem } from '../../model/cart-item';
import { GamesService } from 'src/app/service/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
  @Input()
  game: Game = new Game()
  cartItem: CartItem = new CartItem()

  constructor(private service: GamesService, private router: Router) { }

  onShopGame(count: any) {
    this.cartItem.game = this.game;
    this.cartItem.count = count;
    this.service.postCartItem(this.cartItem).subscribe({
      next: (data: any) => { console.log("Uspesno!"); this.router.navigate(['/cart']) }
    })
  }
}
