import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const EditCard = ({ card }) => {
  const [form, setForm] = useState({
    firstName: card?.firstName,
    lastName: card?.lastName,
    email: card?.email,
    phone: card?.phone,
    address: card?.address,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateCard();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateCard = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/cards/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.firstName) {
      err.firstName = "First name is required";
    }
    if (!form.lastName) {
      err.lastName = "Description is required";
    }
    if (!form.email) {
      err.email = "Email is required";
    }
    if (!form.phone) {
      err.phone = "Phone is required";
    }
    if (!form.address) {
      err.address = "Address is required";
    }

    return err;
  };

  return (
    <div className="min-h-screen px-8 md:px-20 lg:px-48 xl:px-60 2xl:px-96 bg-white dark:bg-secondary pt-14">
      <Head>
        <title>Edit Card</title>
      </Head>
      <h1 className="font-serif font-bold text-4xl md:text-5xl flex justify-center mx-20 mb-14">
        Update Card
      </h1>
      <div className="rounded-lg border border-gray-200 shadow-md p-10 max-w-4xl mx-32">
        <form onSubmit={handleSubmit}>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="firstName"
                id="first_name_form"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
                error={
                  errors.title
                    ? {
                        content: "Please enter a first name",
                        pointing: "below",
                      }
                    : null
                }
              />
              <label
                htmlFor="first_name_form"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="lastName"
                id="last_name_form"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
                error={
                  errors.title
                    ? {
                        content: "Please enter a last name",
                        pointing: "below",
                      }
                    : null
                }
              />
              <label
                htmlFor="last_name_form"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              error={
                errors.title
                  ? {
                      content: "Please enter a email address",
                      pointing: "below",
                    }
                  : null
              }
            />
            <label
              htmlFor="email_form"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="^08\d{9,10}$"
                name="phone"
                id="phone_form"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
                error={
                  errors.title
                    ? {
                        content: "Please enter a phone number",
                        pointing: "below",
                      }
                    : null
                }
              />
              <label
                htmlFor="phone_form"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="address"
                id="Address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
                error={
                  errors.title
                    ? {
                        content: "Please enter an address",
                        pointing: "below",
                      }
                    : null
                }
              />
              <label
                htmlFor="Address"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

EditCard.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/cards/${id}`);
  const { data } = await res.json();

  return { card: data };
};

export default EditCard;
