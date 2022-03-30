import {Fragment} from 'react';
import Head from 'next/head';
import HomePage from '../components/home-page/index';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <HomePage />
    </Fragment>
  );
}

export default Home
