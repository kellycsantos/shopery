'use client'
import { Button, ReviewStars as Review, Tag } from '@/components'
import style from './product.module.scss'
import { Quantity } from '../Quantity/Quantity'
export const ProductShowcase = ({img, name, rating, description, sku,discount, price, priceWithDiscount}: any) => {
    return (
        <section className={style.container}>
            <img src={img} alt="" />
            <article className={style.info}>
                <h1>{name}</h1>
                <div className={style.review_container}>
                <Review stars={5} rating={rating} size={15} />
                 <p><strong>SKU:</strong> {sku} </p>   
                </div>

                <div className={style.price}>
                    <p className={style.value}>${price}</p>
                  {discount &&  <p className={style.valueWithDiscount}>${priceWithDiscount}</p>}
                    <Tag type='discount' value='64% Off' pill/>
                </div>
                <p className={style.description}>
                    {description}
                </p>
                <span className={style.btn_container}>
                <Quantity/>
                <Button text='Add to Cart' size='full'/>
                </span>
                
            </article>
        </section>
    )
}