export const numberHelper = {
  formatNumber(value?: number): string {
    let valueToFormat = value || 0;

    if (typeof value !== 'number') valueToFormat = Number(valueToFormat);

    return valueToFormat.toLocaleString('pt-br', { style: 'decimal' });
  }
}
