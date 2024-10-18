import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 flex flex-col">
      <h1>Explore Destinations and choose your own</h1>
      <Link href="/destinations">Click Here to start</Link>
    </div>
  );
}
