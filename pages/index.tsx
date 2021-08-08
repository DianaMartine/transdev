import React from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.css";
import MainCard from "../src/components/MaindCard";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TransDev</title>
      </Head>
      <Header />
      <MainCard />
      <Footer />
    </div>
  );
}
