import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from '../models/currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input() public currencies: Currency[] = [];
  @Input() public isEditable: boolean = true;
  @Input() public amount: number = 1;

  @Output() public amountChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
}
