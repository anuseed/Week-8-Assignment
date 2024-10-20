import Link from "next/link";
import NavBarStyles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={NavBarStyles.nav}>
      <Link className={NavBarStyles.link} href="/">
        Home
      </Link>
      <Link className={NavBarStyles.link} href="/destinations">
        Destinations
      </Link>
      <Link className={NavBarStyles.link} href="/newDestination">
        Add Destination
      </Link>
    </div>
  );
}
