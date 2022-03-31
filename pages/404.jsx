import Link from 'next/link';

export default function NotFoundPage(){
  return (
    <div className="min-h-screen px-6 md:px-20 lg:px-32 xl:px-60 2xl:px-80 text-2xl md:text-3xl pt-36 md:pt-44 uppercase text-center space-y-10 font-bold font-secondary bg-white dark:bg-secondary">
      <h1>
        Page Not Found :(
      </h1>
      <Link href="/">
        <a>
          back to home
        </a>
      </Link>
    </div>
  )
}