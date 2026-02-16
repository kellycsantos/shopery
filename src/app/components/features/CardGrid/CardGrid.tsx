import styles from './cardgrid.module.scss';
import { Card } from '@/components';
import { ProductProps } from '@/app/types';
type GridProps = {
    data: ProductProps[]
}
export const CardGrid = ({ data }: GridProps) => {
    return (
        <div className={styles.grid}>
            {
                data.map((item) => (
                    <Card link={`/products/${item.sku}`}
                        img={item.image}
                        name={item.name} value={item.value}
                        valueWithDiscount={item.valueWithDiscount}
                        discount={item.discount}
                        rating={item.rating}
                        key={item.sku}
                    />
                ))
            }
        </div>
    )
}