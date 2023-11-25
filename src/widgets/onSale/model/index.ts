import { instanceLogged } from '@/shared/api/axios';
import { ProductCategory } from '@/shared/interface';
import { isErrored } from 'stream';

export const GetCategory = async (): Promise<ProductCategory[] | Error> => {
    try {
        const { data }: { data: ProductCategory[] } = await instanceLogged.get(
            '/products/categories/',
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};
