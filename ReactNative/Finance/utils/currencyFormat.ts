export const convertCurrency = (currency: number) => {
  if (typeof currency !== "number") {
    return "Not a number";
  }

  return currency?.toLocaleString("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currencyDisplay: "symbol",
    style: "currency",
    currency: "COP",
  });
};
