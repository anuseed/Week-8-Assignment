// import localFont from "next/font/local";
import "./globals.css";
import { Catamaran } from "next/font/google";
import NavBar from "@/components/NavBar";

const catamaran = Catamaran({
  weight: "200",
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Destination Blog",
  description:
    "A simple blog that let's you add destinations and comment on them.",
  openGraph: {
    title: "Destination Blog",
    description:
      "A simple blog that let's you add destinations and comment on them.",
    type: "website",
    url: "https://week-8-assignment-p9nrto98c-anuseeds-projects.vercel.app/",
    image: ["https://next-comments-postgres.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={catamaran.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
