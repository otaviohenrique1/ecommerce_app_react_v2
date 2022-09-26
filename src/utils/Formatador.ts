import { format } from 'date-fns';

export function FormatadorMoeda(valor: number | string): string {
  const valorFormatado = Number(valor).toFixed(2).replace(".", ",");
  const resultado = `R$ ${valorFormatado}`;
  return resultado;
}

export function FormataData(valor_data: Date) {
  const data = format(valor_data, "dd/MM/yyyy");
  const hora = format(valor_data, "HH:mm:ss");
  const resultado = `${data} às ${hora}`;
  return resultado;
}
