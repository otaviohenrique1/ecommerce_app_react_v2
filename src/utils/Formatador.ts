export function FormatadorMoeda(valor: number | string): string {
  return `R$ ${Number(valor).toFixed(2).replace(".", ",")}`;
}