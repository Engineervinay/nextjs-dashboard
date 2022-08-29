import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";
export default function Home() {
  return (
    <div className="text  bg-bgcolor dark:bg-darkbg">
      <Layout />
    </div>
  );
}
