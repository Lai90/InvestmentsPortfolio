import {StockRateCollection} from './StockRateCollection'

export class StockSymbol {
	code: string;
	name: string;
	stockRateCollection: StockRateCollection;

	constructor(code: string, stockRateCollection: StockRateCollection, name?: string)
	{
		this.code = code;
		this.stockRateCollection = stockRateCollection;
	}
}