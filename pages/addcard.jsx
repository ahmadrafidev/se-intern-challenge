import { Fragment } from "react";
import Head from "next/head";
import AddNewCards from '../components/new-cards/index';

const AddNewCard = () => {
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
