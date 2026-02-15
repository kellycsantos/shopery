import Link from 'next/link';
import { Searchbar, Banner, Footer, Extras, CardGrid, Button } from '@/components';
import style from './page.module.scss'

const data = [
  {nome : 'maçã'},
  {nome : 'banana'},
  {nome : 'melão'},
  {nome : 'manga'},
  {nome : 'mamão'},
  {nome : 'uva'},
  {nome : 'morango'},
  {nome : 'abacaxi'},
]
export default function Home() {
  return (
    <div className={style.home}>
      <Searchbar />
      <Banner />
      <Extras isOverlap />
      <main className={style.main}>
        <div className={style.introducing}>
          <div className={style.limit}>
            <h3>Introducing Our Products</h3>
            <CardGrid data={data}/>
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
