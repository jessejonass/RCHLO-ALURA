// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function currencyFormatter(amount: any) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}
