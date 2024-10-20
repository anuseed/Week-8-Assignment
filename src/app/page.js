export const metadata = {
  title: "Destination Blog Home Page",
  description: "Welcome to the blog",
};

import Animation from "@/components/Animation";
import Image from "next/image";
import beach from "@/../public/images/beach.jpg";
import forest from "@/../public/images/forest.jpg";
import snow from "@/../public/images/snow.jpg";
import countryside3 from "@/../public/images/countryside3.jpg";
import desert from "@/../public/images/desert.jpg";
import mountain2 from "@/../public/images/mountain2.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="p-10 flex flex-col items-center">
        <h1 className=" text-white text-xl m-10">
          Find your escape in nature ...
        </h1>
        <Animation />
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2 m-10">
        <Link href="/destinations?category=2">
          <Image
            src={beach}
            alt="pink beach"
            className="rounded-lg border-2"
            placeholder="blur"
            width={200}
            height={200}
          />
        </Link>
        <Link href="/destinations?category=3">
          <Image
            src={forest}
            alt="pine forest"
            className="rounded-lg border-2"
            placeholder="blur"
            width={200}
            height={200}
          />
        </Link>
        <Link href="/destinations?category=4">
          <Image
            src={snow}
            alt="snow on red house"
            className="rounded-lg border-2"
            placeholder="blur"
            width={200}
            height={200}
          />
        </Link>
        <Link href="/destinations?category=5">
          <Image
            src={desert}
            alt="desert dunes with blue skies"
            className="rounded-lg border-2"
            placeholder="blur"
            width={200}
            height={200}
          />
        </Link>
        <Link href="/destinations?category=1">
          <Image
            src={mountain2}
            alt="image of a road leading to a mountain"
            className="rounded-lg border-2"
            placeholder="blur"
            width={200}
            height={200}
          />
        </Link>
        <Link href="/destinations?category=6">
          <Image
            src={countryside3}
            alt="image of the countryside"
            className="rounded-lg border-2"
            placeholder="blur"
            width={200}
            height={200}
          />
        </Link>
      </div>
    </>
  );
}
