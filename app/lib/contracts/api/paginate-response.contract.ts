export interface ApiDefaultPaginationResponse<T> {
  data: T[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
  };
}
