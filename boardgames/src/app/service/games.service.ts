import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GameList } from '../games/model/game-list';
import { Game } from '../games/model/game';
import { NumericLiteral } from 'typescript';
import { Cart } from '../games/model/cart';
import { CartItem } from '../games/model/cart-item';
import { Order } from '../games/model/order';
const cartURL = "http://localhost:3000/api/cart"
const gameURL = "http://localhost:3000/api/games"
const orderURL = "http://localhost:3000/api/orders"
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }


  getAllGames(params?: any): Observable<GameList> {
    let options = {}

    if (params) {
      options = {
        params: new HttpParams()
          .set("sort", params.sort || "")
          .set("sortDirection", params.sortDirection || "")
          .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.httpClient.get(gameURL, options).pipe(
      map((data: any) => new GameList(data))
    )
  }

  getOneGame(id: number): Observable<Game> {
    return this.httpClient.get(gameURL + "/" + id).pipe(
      map((data: any) => new Game(data))
    )
  }

  postCartItem(item: CartItem): Observable<CartItem> {
    return this.httpClient.post(cartURL + "/items", item).pipe(
      map((data: any) => new CartItem(data))
    )
  }

  getAllCartItems(): Observable<Cart> {
    return this.httpClient.get(cartURL).pipe(
      map((data: any) => new Cart(data))
    )
  }

  deleteCartItem(cartId: number): Observable<any> {
    return this.httpClient.delete(cartURL + "/items/" + cartId);
  }

  postOrder(order: Order): Observable<any> {
    return this.httpClient.post(orderURL, order);
  }
}
