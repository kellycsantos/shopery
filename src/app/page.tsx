'use client'
import { getAllProducts } from './services/api';
import Link from 'next/link';
import { Searchbar, Banner, Footer, Extras, CardGrid, Button } from '@/components';
import style from './page.module.scss'
import { useEffect, useState } from 'react';
import { ProductProps } from './types';
export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {

    getAllProducts().then((response) => {
      setProducts(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <div className={style.home}>
      <Searchbar />
      <Banner />
      <Extras isOverlap />
      <main className={style.main}>
        <div className={style.introducing}>
          <div className={style.limit}>
            <h3>Introducing Our Products</h3>
              <CardGrid data={products.slice(10,18)}/> 
            <Link href={'/shopping'}>
              <Button text='See All' />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
