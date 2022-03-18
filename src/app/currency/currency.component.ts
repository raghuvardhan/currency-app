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

  @Output() public amount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
}
