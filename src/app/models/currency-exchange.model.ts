import { Currency } from "./currency.model";

export interface CurrencyExchange{
    fromCurrency: Currency,
    toCurrency: Currency,
    rate: number
}