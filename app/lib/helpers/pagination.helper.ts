export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function getMonthName(dateString: string): string {
  const newDate = new Date(dateString);
  return newDate.toLocaleString('pt-br', { month: 'long' }).toUpperCase();
}

export const formatDate = (dateString: string): string => {
  const newDate = new Date(dateString);
  return newDate.toLocaleDateString('pt-br');
};
