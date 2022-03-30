import { Fragment } from "react";
import Head from "next/head";
import { NextPage } from "next";
import AddNewCards from '../components/new-cards/index';

const AddNewCard: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Add Card</title>
      </Head>
      <AddNewCards />
    </Fragment>
  );
};

export default AddNewCard;
