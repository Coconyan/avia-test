import { Currencies } from "../const";

export const getPriceWithCurrency = (currency: Currencies, price: number) => {
  switch (currency) {
    case Currencies.Rub:
      return price
    case Currencies.Usd:
      return Math.floor(price / 96)
    case Currencies.Eur:
      return Math.floor(price / 103)
    default:
      return price
  }
}
