import { Input } from './components';
import styles from './page.module.scss'
export default function Home() {
  return (
    <div>
      <main>
        <h1>Shopery !</h1>
        <h2>Titulo 2</h2>
        <h3>Titulo 3</h3>
        <h4>Titulo 4</h4>
        <h5>Titulo 5</h5>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia quisquam eligendi tempora quam voluptatum ipsa voluptate aspernatur dignissimos? Aliquid!</p>
      <Input
      placeholder='Email'
      />
      </main>
    </div>
  );
}
