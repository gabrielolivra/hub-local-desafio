interface IPaginateMeta {
  page: number;
  perPage: number;
  total: number;
}

export interface IPaginateContract {
  page: number;
  perPage: number;
  filters: { attribute: string; value: string; isDate: boolean, isBool: boolean }[];
  searchs: { attribute: string; value: string }[];
  sort: { attribute: string; direction: 'asc' | 'desc' }[];
  paginateMeta: IPaginateMeta | undefined;
  totalPages?: number;
}

export class PaginateContract implements IPaginateContract {
  page: number = 1;
  perPage: number = 10;
  filters: { attribute: string; value: string; isDate: boolean, isBool: boolean }[] = [];
  searchs: { attribute: string; value: string }[] = [];
  sort: { attribute: string; direction: 'asc' | 'desc' }[] = [];
  paginateMeta: IPaginateMeta | undefined;

  getTotalPages(): number {
    if (!this.paginateMeta) return 0;

    return Math.ceil(this.paginateMeta.total / this.paginateMeta.perPage);
  }

  toJson(): IPaginateContract {
    return {
      page: this.page,
      perPage: this.perPage,
      filters: this.filters,
      searchs: this.searchs,
      sort: this.sort,
      paginateMeta: this.paginateMeta,
      totalPages: this.getTotalPages(),
    };
  }

  mountQuerySearchAndFilterString(): string {
    const search = this.mountQuerySearchString();
    const filter = this.mountQueryFilterString();

    if (!search && !filter) return '';

    if (!search) return `filter=${filter}`;
    if (!filter) return `filter=${search}`;

    return `filter=${search}_and_${filter}`;
  }

  mountQuerySortString(): string {
    if (!this.sort.length) return '';

    return `sort=${this.sort
      .map(sort => `${sort.attribute}:${sort.direction}`)
      .join('_and_')}`;
  }

  mountQueryPaginationString(): string {
    return `page=${this.page}&per_page=${this.perPage}`;
  }

  setPaginateMeta(data: IPaginateMeta | undefined): void {
    this.paginateMeta = data;
  }

  getFilters(): { attribute: string; value: string; isDate: boolean }[] {
    return this.filters;
  }

  private mountQueryFilterString(): string {
    if (!this.filters.length) return '';

    return this.filters
      .map(
        filter => {
          const filterType = filter.isDate ? ':dteq:' : filter.isBool ? ':isbool:' : ':eq:';

          return `${filter.attribute}${filterType}${filter.value}`;
        }
      )
      .join('_and_');
  }

  private mountQuerySearchString(): string {
    if (!this.searchs.length) return '';

    return this.searchs
      .map(search => `${search.attribute}:like:${search.value}`)
      .join('_and_');
  }
}

export class PaginateBuilder {
  private paginate: Partial<PaginateContract> = new PaginateContract();

  static aBuilder(): PaginateBuilder {
    return new PaginateBuilder();
  }

  withJson(paginateContract: IPaginateContract): PaginateBuilder {
    paginateContract.filters.forEach(element => {
      this.paginate.filters?.push(element);
    });

    paginateContract.searchs.forEach(element => {
      this.paginate.searchs?.push(element);
    });

    this.paginate.sort?.forEach(element => {
      this.paginate.sort?.push(element);
    });

    this.paginate.page = paginateContract.page;
    this.paginate.perPage = paginateContract.perPage;
    this.paginate.paginateMeta = paginateContract.paginateMeta;

    return this;
  }

  withSearchAttribute(params: {
    attribute: string;
    value: string;
  }): PaginateBuilder {
    this.paginate.searchs?.push({
      attribute: params.attribute,
      value: params.value,
    });
    return this;
  }

  withFilterAttribute(params: {
    attribute: string;
    value: string;
    isDate?: boolean;
    isBool?: boolean;
  }): PaginateBuilder {
    this.paginate.filters?.push({
      attribute: params.attribute,
      value: params.value,
      isDate: params.isDate || false,
      isBool: params.isBool || false,
    });
    return this;
  }

  withPage(params: { page: number | string; perPage: number | string }): PaginateBuilder {
    this.paginate.page = Number(params.page) || 1;
    this.paginate.perPage = Number(params.perPage) || 10;
    return this;
  }

  withSort(params: {
    attribute: string;
    direction: 'asc' | 'desc';
  }): PaginateBuilder {
    this.paginate.sort?.push({
      attribute: params.attribute,
      direction: params.direction,
    });
    return this;
  }

  withSearch(search: string): PaginateBuilder {
    const searchSplited = search?.split('=');
    if (!searchSplited) return this;

    return this.withSearchAttribute({
      attribute: searchSplited[0],
      value: searchSplited[1],
    });
  }

  withFilter(filter: string, isDate?: boolean, isBool?: boolean): PaginateBuilder {
    const filterSplited = filter?.split('=');
    if (!filterSplited) return this;

    return this.withFilterAttribute({
      attribute: filterSplited[0],
      value: filterSplited[1],
      isDate,
      isBool,
    });
  }

  build(): PaginateContract {
    return this.paginate as PaginateContract;
  }
}
