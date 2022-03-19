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
        return amount / this.getExchangeRate(from, to);
    }

    private getExchangeRate(from: Currency, to: Currency): number{
        const mockCurrencyExchanges: CurrencyExchange[] = [
            {
                fromCurrency: {
                    id:"USD",
                    name:"United States Dollar",
                },
                toCurrency:{
                    id:"INR",
                    name:"Indian National Rupee",
                },
                rate: 0.013
            },
            {
                toCurrency: {
                    id:"USD",
                    name:"United States Dollar",
                },
                fromCurrency:{
                    id:"INR",
                    name:"Indian National Rupee",
                },
                rate: 75
            }
        ];

        const result =  mockCurrencyExchanges.find((currencyExchange) => currencyExchange.fromCurrency.id == from.id && currencyExchange.toCurrency.id == to.id)?.rate ?? 1;
        return result;
    }
}