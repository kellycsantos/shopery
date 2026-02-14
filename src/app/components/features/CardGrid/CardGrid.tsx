import styles from './cardgrid.module.scss';
import { Card } from '@/components';

type GridProps = {
    data : any
}
export const CardGrid = ({data}: GridProps) => {
    return (
        <div className={styles.grid}>
            {
                data.map((item, id: number) => (      
                    <Card name={item.nome} key={id} link='/test'/>
                ))
            }
        </div>
    )
}