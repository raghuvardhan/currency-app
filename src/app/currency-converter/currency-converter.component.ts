import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers:[CurrencyService]
})
export class CurrencyConverterComponent implements OnInit {

  public currencies: Currency[] = [];
  public fromCurrency: Currency = this.currencies[0];
  public toCurrency: Currency = this.currencies[1];
  public fromAmount: number = 1;
  public toAmount: number = 1;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  public getCurrencies(): void {
    this.currencies = this.currencyService.getCurrencies();
  }

  public convert(): void {
    this.toAmount = this.currencyService.convertCurrency(this.fromCurrency, this.toCurrency, this.fromAmount); 
  }
}
