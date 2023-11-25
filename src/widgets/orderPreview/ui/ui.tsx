'use client';
import styles from './ui.module.scss';
import { OrderTypes } from '@/shared/interface';
import { useState, useEffect } from 'react';
import { Get } from '../model';
import { OrdersCardInfo } from '@/features/ordersCardInfo';
import { TableWithOrders } from '@/features/tableWithOrders';
import { OrderPreviewTable } from '@/features/orderPreviewTable';
export const OrderPreview = ({ params }: { params: { id: number } }) => {
    const [orders, setOrders] = useState<OrderTypes | null>(null);
    const ID = params.id;
    useEffect(() => {
        const getOrder = async () => {
            const fetchEvent: OrderTypes = await Get(ID);
            setOrders(fetchEvent);
        };

        getOrder();
    }, []);

    return (
        <>
            <div className={styles.mainLayout}>
                <section className={styles.header}>
                    <h2 className={styles.orderNumber}>Заказ № {orders?.id}</h2>
                    <h3 className={styles.orderStatus}>
                        <span className={styles.orangeStatus}>Статус:</span>{' '}
                        {orders?.status.name.toLowerCase()}
                    </h3>
                </section>
                <section
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    }}>
                    <OrdersCardInfo order={orders} />
                    <OrderPreviewTable order={orders} />
                </section>
            </div>
        </>
    );
};
