'use client';

import { SearchAndFilter } from '@/features/searchAndFilter';
import styles from './ui.module.scss';
import { ProductCard } from '@/entities/productCard';
import { useEffect, useState } from 'react';
import { GetCategory } from '../model';
import { ProductCategory } from '@/shared/interface';

export const PageSale = () => {
    const [categoriesData, setCategoriesData] = useState<ProductCategory[] | null | Error>(null);
    useEffect(() => {
        const fetchCategories = async () => {
            const categoryDate = await GetCategory();
            setCategoriesData(categoryDate);
        };
        fetchCategories();
    }, []);
    console.log(categoriesData);
    return (
        <>
            <div className={styles.layout}>
                <SearchAndFilter />
                {Array.isArray(categoriesData)
                    ? categoriesData.map((category: ProductCategory) => (
                          <ProductCard key={category.id} category={category} />
                      ))
                    : undefined}
            </div>
        </>
    );
};
