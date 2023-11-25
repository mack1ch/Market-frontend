import { OrderProductsTypes, OrderTypes } from '@/shared/interface';

export const getTotalProductsCount = (order: OrderTypes): number => {
    return order.order_products.reduce((total, product) => {
        return total + parseInt(product.amount, 10);
    }, 0);
};
