export const cpfCnpjHelper = {
  formatCpfCnpjToHumans: (cpfCnpj: string | undefined | null): string => {
    if (!cpfCnpj) return '';

    if (cpfCnpj.length <= 11)
      return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpfCnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
  },
  onlyNumbers: (cpfCnpj: string | undefined): string => {
    if (!cpfCnpj) return '';
    return cpfCnpj.replace(/\D/g, '');
  },
};
