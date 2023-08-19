import { PaymentMethod } from "./paymentMethods.interface";

export interface Currency {
	uid: string;
	name: string;
	price: number;
	paymentMethods: PaymentMethod[];
	discounts: CurrencyDiscount[];
}

export interface CurrencyDiscount {
	quantity: number;
	discount: number;
}
