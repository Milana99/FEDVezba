import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './games/game-list/game-list.component';
import { ContactComponent } from './contact/contact.component';
import { GameDetailsComponent } from './games/game-list/game-details/game-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "games", component: GameListComponent },
  { path: "gameDetails/:_id", component: GameDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "", redirectTo: "games", pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
