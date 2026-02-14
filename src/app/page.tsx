import Link from 'next/link';
import { Searchbar, Banner, Footer, Extras } from '@/components';
import style from './page.module.scss'
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
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
