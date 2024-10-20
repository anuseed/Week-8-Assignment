// we need some navigation
//  we need query strings to sort data asc and desc
//  remember metadata

import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Destinations",
  description: "Choose your destination",
};

export default async function DestinationsPage({ searchParams }) {
  let destinations;
  if (searchParams.category) {
    destinations = await db.query(
      `SELECT * FROM destinations WHERE category_id=$1`,
      [searchParams.category]
    );
  } else {
    destinations = await db.query(`SELECT * FROM destinations`);
  }
  console.log(destinations);
  const wrangledDestinations = destinations.rows;
  const sortBy = searchParams.sort;
  console.log(sortBy, "this is sort by");
  const sortDestinations = wrangledDestinations.sort((a, b) => {
    // if desc:
    if (sortBy === "desc") {
      if (a.destination_name > b.destination_name) {
        return -1;
      } else if (a.destination_name < b.destination_name) {
        return 1;
      }
      return 0;
    }

    // otherwise:
    if (a.destination_name < b.destination_name) {
      return -1;
    } else if (a.destination_name > b.destination_name) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <h1 className="text-center text-white text-2xl p-20">
        Where will your next escape in nature be?
      </h1>
      {/* finally got the sort by asc and desc working as I was trying to do it in a select tag which would have required me to use onChange which I can't in a server component, didn't realize that I should be using a link, which I saw in the week 7 workshop */}
      <div className=" flex justify-center text-white border-2 rounded-md p-4 m-4">
        {searchParams.sort === "desc" ? (
          <Link href={`destinations?sort=asc`}>
            Sort Destinations by Ascending
          </Link>
        ) : (
          <Link href={`destinations?sort=desc`}>
            Sort Destinations by Descending
          </Link>
        )}
      </div>

      <ul>
        {sortDestinations.map((destination) => (
          <div
            key={destination.id}
            className="flex flex-col items-center
             m-10"
          >
            <Link
              href={`destinations/${destination.id}`}
              className="text-4xl text-white"
            >
              {destination.destination_name}
            </Link>
            <Image
              src={destination.image}
              alt={destination.destination_name}
              className="rounded-lg border-2"
              width={400}
              height={500}
            />
          </div>
        ))}
      </ul>
    </>
  );
}
