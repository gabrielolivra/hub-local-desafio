import { compareAsc, format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const dateHelper = {
  formatDateToHumans: (date: Date | string | undefined): string => {
    if (!date) return '';
    const dateObject =
      typeof date === 'string' ? parse(date, 'yyyy-MM-dd', new Date()) : date;
    return format(dateObject, 'dd-MM-yyyy', { locale: ptBR });
  },

  formatDateLogix: (date: Date | string | undefined): string => {
    if (!date) return '';
    const dateObject =
      typeof date === 'string' ? parse(date, 'yyyy-MM-dd', new Date()) : date;
    return format(dateObject, 'yyyy-MM-dd', { locale: ptBR });
  },

  formatDatetimeToHumans: (date: Date | string | undefined): string => {
    if (!date) return '';
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    return format(dateObject, 'dd-MM-yyyy HH:mm', { locale: ptBR });
  },

  formatToIsoString: (date: Date | string | undefined | null): string => {
    if (!date) return '';
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    return dateObject.toISOString();
  },

  getMonthName: (date: Date | string | undefined): string => {
    if (!date) return '';
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    return format(dateObject, 'MMMM', { locale: ptBR });
  },

  formatToDateInput: (date?: Date | string | undefined | null): string => {
    if (!date) return '';
    const dateObject =
      typeof date === 'string' ? parse(date, 'yyyy-MM-dd', new Date()) : date;
    return format(dateObject, 'yyyy-MM-dd', { locale: ptBR });
  },
  compareDate: (firstDate: Date, secondDate: Date): boolean => {
    const result = compareAsc(
      new Date(format(firstDate, 'yyyy-MM-dd', { locale: ptBR })),
      secondDate,
    );
    const status = result === -1 || result === 0;
    return status;
  },
};
