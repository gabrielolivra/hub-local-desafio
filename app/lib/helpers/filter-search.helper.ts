import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';

export const filterSearchHelper = {
  replaceUrl: (props: {
    pathname: string;
    params: ReadonlyURLSearchParams;
    replace: (href: string, options?: NavigateOptions) => void;
    attribute: string;
    attributeName: string;
    value: string;
  }) => {
    const {
      pathname,
      params: searchParams,
      replace,
      value,
      attribute,
      attributeName,
    } = props;

    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (value) {
      params.set(
        attribute,
        filterSearchHelper.mounterQuerySearchFilter({ attributeName, value }),
      );
    } else {
      params.delete(attribute);
    }
    replace(`${pathname}?${params.toString()}`);
  },

  mounterQuerySearchFilter: ({
    attributeName,
    value,
  }: {
    attributeName: string;
    value: string;
  }): string => {
    return `${attributeName}=${value}`;
  },
};
