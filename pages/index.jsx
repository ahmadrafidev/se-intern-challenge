import Head from 'next/head';
import Link from "next/link";

const HomePage = ({cards}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen px-8 md:px-20 lg:px-48 xl:px-60 2xl:px-96 bg-white dark:bg-secondary pt-14">
        <h1 className="font-serif font-bold text-3xl md:text-5xl flex justify-center pt-5 mx-24 mb-10">
          Cards
        </h1>
        <div className="container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
          {cards?.map((card) => {
            return (
              <ul
                key={card._id}
                className="border-gray-300 border-2 rounded-xl w-full py-10 px-5 mb-10"
              >
                <div className="flex flex-row space-x-4 font-serif text-lg md:text-xl">
                  <h1>{card.firstName}</h1>
                  <h1>{card.lastName}</h1>
                </div>
                <div className="flex flex-col font-sans text-base md:text-lg">
                  <h2>{card.email}</h2>
                  <h2>{card.phone}</h2>
                  <h2>{card.address}</h2>
                </div>
                <div className="flex flex-row pt-4 items-center justify-center">
                  <Link href={`/${card._id}`}>
                    <a>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-8 flex flex-row items-center">
                        View
                      </button>
                    </a>
                  </Link>
                  <Link href={`/${card._id}/edit`}>
                    <a>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-8 flex flex-row items-center">
                        Edit
                      </button>
                    </a>
                  </Link>
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

HomePage.getInitialProps = async() => {
  const res = await fetch("http://localhost:3000/api/cards");
  const { data } = await res.json();

  return { cards: data };
};

export default HomePage;



