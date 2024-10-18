import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row p-10 justify-between">
      <Link href="/">Home</Link>
      <Link href="/destinations">Destinations</Link>
      <Link href="/newDestination">Add Destination</Link>
    </div>
  );
}
