import {InvalidateOptions, InvalidateQueryFilters, QueryClient, QueryKey } from 'react-query';
import { isNil } from './ValidationUtils';

export class ReactQueryUtils {
    private static queryClient: QueryClient;

    static getQueryClient = (): QueryClient => {
        if (isNil(ReactQueryUtils.queryClient)) {
            ReactQueryUtils.queryClient = new QueryClient();
        }

        return ReactQueryUtils.queryClient;
    };

    static invalidateQueries = async <TPageData = unknown>(
        queryKey?: QueryKey,
        filters?: InvalidateQueryFilters<TPageData>,
        options?: InvalidateOptions,
    ): Promise<void> => {
        await ReactQueryUtils.queryClient.invalidateQueries<TPageData>(queryKey, filters, options);
    };
}
