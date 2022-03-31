import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const DeleteCard = ({ cards }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteCard();
    }
  }, [isDeleting]);

  const deleteCard = async () => {
    const cardId = router.query.id;
    try {
      const deleted = await fetch(`/api/cards/${cardId}`, {
        method: "DELETE",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className="flex justify-center min-h-screen px-8 md:px-20 lg:px-48 xl:px-60 2xl:px-96 bg-white dark:bg-secondary pt-14ex">
      <Head>
        <title>Details Card</title>
      </Head>

      <div className="flex flex-col items-center pt-20 tracking-wide text-justify">
        <h1 className="font-serif font-bold text-2xl md:text-3xl flex justify-center pt-5 mx-24 mb-10">
          Your Cards Detail
        </h1>
        <div className="flex flex-col font-serif text-lg md:text-xl">
          <div className="flex flex-row space-x-3">
            <h1>{cards?.firstName}</h1>
            <h1>{cards?.lastName}</h1>
          </div>
          <h1>{cards?.email}</h1>
          <h1>{cards?.phone}</h1>
          <h1>{cards?.address}</h1>
        </div>
        <div className="p-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-8 flex flex-row items-center"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps({ query: { id } }) {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/cards/${id}`);
  const { data } = await res.json();

  return { 
    props: {
      cards: data,
    }
  };
};

export default DeleteCard;
