import Link from 'next/link';
import { Banner, Input, Extras } from './components';
import styles from './page.module.scss'
export default function Home() {
  return (
    <div>
      <main>
        <h1>Home page</h1>
        <Link href='/'>Home</Link> <br/>
        <Link href='/register'>Register</Link><br/>
        <Link href='/login'>Login</Link><br/>
        <Link href='/config'>Not found</Link><br/>
        <hr/>
        <br/>
        <Extras/>
      </main>
    </div>
  );
}
