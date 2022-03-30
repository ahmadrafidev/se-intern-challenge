import Link from 'next/link';
import { Box, Button, Text } from "@chakra-ui/react";

const HomePage = ({ cards }) => {
  return (
    <>
      <div className="h-screen px-8 md:px-20 lg:px-48 xl:px-60 2xl:px-96 bg-white dark:bg-secondary pt-14">
        <h1 className="font-serif font-bold text-3xl md:text-5xl flex justify-center pt-5 mx-24">
          Cards
        </h1>
        {cards?.map(card => {
          return (
            <div key={card._id}>
              <h2>{card.firstName}</h2>
              <h2>{card.lastName}</h2>
              <h2>{card.email}</h2>
              <h2>{card.phone}</h2>
              <h2>{card.address}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps = async() => {
  const res = await fetch("/api/cards");
  const data = await res.json();

  return { cards: data };
};


export default HomePage;