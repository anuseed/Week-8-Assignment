import Link from "next/Link";

export default function NavBar() {
  return (
    <div className="flex flex-col p-10">
      <Link href="/">Home</Link>
      <Link href="/destinations">Destinations</Link>
      <Link href="/newDestination">Add Destination</Link>
    </div>
  );
}
