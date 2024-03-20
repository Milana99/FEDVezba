import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';
import { Cart } from '../games/model/cart';
import { CartItem } from '../games/model/cart-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../games/model/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    e_mail: new FormControl("", Validators.required),
    tel: new FormControl("", Validators.required)
  })

  constructor(private service: GamesService, private router: Router) {

  }

  cart: Cart = new Cart()
  order: Order = new Order()

  ngOnInit(): void {
    this.getAllCartItems()
  }

  getAllCartItems() {
    this.service.getAllCartItems().subscribe({
      next: (data: Cart) => { console.log(data); this.cart = data }
    })
  }

  onDelete(c: CartItem) {

    let ind = this.cart.items.indexOf(c);


    this.service.deleteCartItem(ind).subscribe({
      next: (data: any) => { console.log("Uspesno!"); this.ngOnInit() }
    })
  }

  onOrder() {
    this.order.name = this.form.value.name;
    this.order.address = this.form.value.address;
    this.order.e_mail = this.form.value.e_mail;
    this.order.tel = this.form.value.tel;

    this.service.postOrder(this.order).subscribe({
      next: (data: any) => { console.log("Uspesno!"); }
    })
  }
}
