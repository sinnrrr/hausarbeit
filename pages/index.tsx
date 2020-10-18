import { motion } from 'framer-motion';
import { pageTransition, elementTransition } from './animations';
import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Шлях, ціною в життя</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.landingBlock}>
          <motion.div variants={elementTransition}>
            <h1>Шлях, ціною в життя</h1>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
