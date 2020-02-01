import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  public drinkList: DrinkDetail[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.drinkList = [];

    console.log(this.drinkList);
  }


}

class DrinkDetail {
  name: string;
  price: number;
  note: string;
}
