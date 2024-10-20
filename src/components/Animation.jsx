"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Animation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }}
        className="flex-grow"
      >
        <Link
          href="/destinations"
          className=" rd-2 border-4 bg-blue-400 rounded-md p-4 m-4"
        >
          Click to see all or choose a category below.
        </Link>
      </motion.div>
    </>
  );
}
