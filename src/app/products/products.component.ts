import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = "welcome to products list"
  listProdcut:Product[]=[];

  constructor() { }

  ngOnInit(): void {
    this.listProdcut=[
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0, picture:'https://static.remove.bg/remove-bg-web/221525818b4ba04e9088d39cdcbd0c7bcdfb052e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0, picture:'https://static.remove.bg/remove-bg-web/221525818b4ba04e9088d39cdcbd0c7bcdfb052e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0, picture:'https://static.remove.bg/remove-bg-web/221525818b4ba04e9088d39cdcbd0c7bcdfb052e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'}, ]
  }

  BuyProduct(idProduct: string) {
    for (let i = 0; i < this.listProdcut.length; i++) {
      if (this.listProdcut[i].id.match(idProduct)) {
        this.listProdcut[i].quantity--
      }
    }
  }

  LikeProduct(idProduct: string){
    for (let i = 0; i < this.listProdcut.length; i++) {
      if (this.listProdcut[i].id.match(idProduct)) {
        this.listProdcut[i].like++
      }
    }
  }
}
