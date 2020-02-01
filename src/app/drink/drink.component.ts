import { Component, OnInit } from '@angular/core';
import { animate, transition, state, style, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DrinkComponent implements OnInit {

  public dataSource = new MatTableDataSource();
  constructor() { }

  ngOnInit() {
  }

}
