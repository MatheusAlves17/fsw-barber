export function formatCurrency(value: Number) {
  const number = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value))

  return number
}
