import { Injectable } from "@angular/core";
import { CurrencyExchange } from "../models/currency-exchange.model";
import { Currency } from "../models/currency.model";

@Injectable()
export class CurrencyService {
    public getCurrencies(): Currency[]{
        const mockCurrencies: Currency[] = [{
            id:"USD",
            name: "United states Dollar"
        },
        {
            id:"EUR",
            name:"Euro"
        },
        {
            id:"INR",
            name:"Indian National Rupee"
        }
    ];

    return mockCurrencies;
    }

    public convertCurrency(from: Currency, to: Currency, amount: number): number{
        return amount * this.getExchangeRate(from, to);
    }

    private getExchangeRate(from: Currency, to: Currency): number{
        const mockCurrencyExchanges: CurrencyExchange[] = [
            {
                fromCurrency: {
                    name:"United States Dollar",
                    id:"USD"
                },
                toCurrency:{
                    name:"Indian National Rupee",
                    id:"INR"
                },
                rate: 0.013
            },
            {
                toCurrency: {
                    name:"United States Dollar",
                    id:"USD"
                },
                fromCurrency:{
                    name:"Indian National Rupee",
                    id:"INR"
                },
                rate: 75
            }
        ];

        return mockCurrencyExchanges.find((currencyExchange) => currencyExchange.fromCurrency == from && currencyExchange.toCurrency == to)?.rate ?? 1;
    }
}