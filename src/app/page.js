export const metadata = {
  title: "Destination Blog Home Page",
  description: "Welcome to the blog",
};

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 flex flex-col">
      <h1>Explore Destinations and choose your own</h1>
      <Link
        href="/destinations"
        className="border-black-400 border-4 bg-pink-400 p-4 m-4"
      >
        Click Here to start
      </Link>
    </div>
  );
}
