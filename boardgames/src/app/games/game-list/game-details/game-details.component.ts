import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/service/games.service';
import { Game } from '../../model/game';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']

})
export class GameDetailsComponent implements OnInit {

  constructor(private service: GamesService, private route: ActivatedRoute, private router: Router) { }

  game: Game = new Game()
  cartItem: CartItem = new CartItem()
  selected = 0;
  ngOnInit(): void {
    this.getGame()
  }
  getGame() {
    let id = this.route.snapshot.params['_id'];

    this.service.getOneGame(id).subscribe({
      next: (data: Game) => { this.game = data; console.log(data) }
    })
  }

  onRateChanged() {
    console.log(this.selected)
  }

  onShopGame(count: any) {
    this.cartItem.game = this.game;
    this.cartItem.count = count;
    this.service.postCartItem(this.cartItem).subscribe({
      next: (data: any) => { console.log("Uspesno!"); this.router.navigate(['/cart']) }
    })
  }

}
