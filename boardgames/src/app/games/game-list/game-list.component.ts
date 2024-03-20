import { Component, OnInit } from '@angular/core';
import { GameList } from '../model/game-list';
import { GamesService } from 'src/app/service/games.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  max_price = 0;
  min_price = 0;



  form: FormGroup = new FormGroup({
    currentValueFrom: new FormControl(0),
    currentValueTo: new FormControl(9000)
  })

  params = {
    filter: {
      name: "",
      priceFrom: "",
      priceTo: "",
      availableOnly: ""
    },
    sort: "price",
    sortDirection: ""
  }

  game_list: GameList = new GameList()
  constructor(private service: GamesService) { }

  ngOnInit(): void {
    this.getAllGames()

  }

  getAllGames() {
    this.service.getAllGames(this.params).subscribe({
      next: (data: GameList) => {
        this.game_list = data; console.log(data); this.maxPrice();
      }
    })
  }

  returnValue(): number {
    this.getAllGames()
    return this.max_price;
  }

  onChangeSort(sortDirection: any) {
    this.params.sortDirection = sortDirection.target.value;
    this.getAllGames()
  }

  maxPrice() {
    this.game_list.results.forEach((e) => { if (this.min_price > e.price) this.min_price = e.price; if (this.max_price < e.price) this.max_price = e.price; })
  }

  onChangePriceFrom(priceFrom: any) {
    this.params.filter.priceFrom = priceFrom.target.value;
    this.getAllGames()
  }

  onChangePriceTo(priceTo: any) {
    this.params.filter.priceTo = priceTo.target.value;

  }

  onChangeCheckbox(cb: any) {
    console.log(cb.target.checked)
    if (cb.target.checked == true)
      this.params.filter.availableOnly = "true";
    else
      this.params.filter.availableOnly = "";

    this.getAllGames()

  }
}
