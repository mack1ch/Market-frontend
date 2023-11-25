import { OrderTypes, ProductTypes } from '@/shared/interface';
import styles from './ui.module.scss';
import { OrderItem } from '@/entities/orderItem';
import { getTotalProductsCount } from '../model';

export const OrdersCardInfo = ({ order }: { order: OrderTypes | null }) => {
    const productAmount = order && getTotalProductsCount(order);
    return (
        <>
            <article className={styles.card}>
                <header className={styles.header}>
                    {productAmount} товара ({order?.total_weight} г.) на сумму{' '}
                    <span className={styles.orange}>{order?.total_price}₽</span>
                </header>
                <main className={styles.main}>
                    {order?.order_products.map((product: any) => {
                        return (
                            <>
                                <OrderItem
                                    key={product.id}
                                    cover={product.product.cover}
                                    name={product.product.name}
                                    price={order.total_price}
                                    quantity={productAmount}
                                />
                                <div key={product.id} className={styles.stock}></div>
                            </>
                        );
                    })}
                </main>
            </article>
        </>
    );
};
