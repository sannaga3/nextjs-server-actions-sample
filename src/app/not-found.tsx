import Link from "next/link";

const NotFoundPages = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-64 text-start">
        <h1 className="text-xl mb-3">404 Page Not Found</h1>
        <Link href="/" className="text-blue-400 hover:underline">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPages;
