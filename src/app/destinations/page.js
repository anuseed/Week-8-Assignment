// we need some navigation
//  we need query strings to sort data asc and desc
//  remember metadata
import { db } from "@/utils/dbConnection";
import Link from "next/link";

import Image from "next/image";

export default async function DestinationsPage() {
  const destinations = await db.query(`SELECT * FROM destinations`);
  console.log(destinations);
  const wrangledDestinations = destinations.rows;

  return (
    <>
      <h1 className="text-center p-20">Choose your destination!</h1>

      <ul className="flex flex-col items-center">
        {wrangledDestinations.map((destination) => (
          <>
            <Link href={`destinations/${destination.id}`} key={destination.id}>
              {destination.destination_name}
            </Link>
            <Image
              src={destination.image}
              alt={destination.destination_name}
              width={400}
              height={500}
            />
          </>
        ))}
      </ul>
    </>
  );
}
