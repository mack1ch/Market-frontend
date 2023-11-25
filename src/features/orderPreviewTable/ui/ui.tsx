import { OrderTypes } from '@/shared/interface';
import styles from './ui.module.scss';

export const OrderPreviewTable = ({ order }: { order: OrderTypes | null }) => {
    const originalTime = order?.delivery_time || '';
    const timeParts = originalTime.split(':');
    const hours = timeParts[0];
    const minutes = timeParts[1];
    const formattedTime = hours && minutes ? `${hours}:${minutes}` : 'Загрузка...';
    return (
        <>
            <article className={styles.card}>
                <div className={styles.fields}>
                    <h4 className={styles.field_title}>Вес заказа</h4>
                    <p className={styles.field_value}>{order?.total_weight}</p>
                </div>
                <div className={styles.fields}>
                    <h4 className={styles.field_title}>Стоимость доставки</h4>
                    <p className={styles.field_value}>{order?.delivery_price} руб.</p>
                </div>
                <div className={styles.fields}>
                    <h4 className={styles.field_title}>Общая сумма заказа</h4>
                    <p className={styles.field_value}>{order?.total_price} руб.</p>
                </div>
                <div className={styles.fields}>
                    <h4 className={styles.field_title}>Адрес</h4>
                    <p className={styles.field_value}>ул. Розы Люксембург 56А</p>
                </div>
                <div className={styles.fields}>
                    <h4 className={styles.field_title}>Дата доставки</h4>
                    <p className={styles.field_value}>{formattedTime}</p>
                </div>
            </article>
        </>
    );
};
