import React from 'react';
import styles from "./generate-powerpoint.module.css";
import TextInput from '@/components/TextInput';
import Link from 'next/link';

const Home = () => {

  return (
    <div className={styles.background}>
      <div className={styles.titleBox}>
      <Link href="/">
        <div className={styles.titleBox}>
          <h1 className={styles.logo}>uTeach</h1>
        </div>
      </Link>
      </div>
    <div className={styles.container}>
      <h1 className={styles.title}>Generate a Powerpoint</h1>
      <div className={styles.containerCenter}>
        <TextInput className={styles.textInput} />
      </div>
    </div>
  </div>
  );
};

export default Home;