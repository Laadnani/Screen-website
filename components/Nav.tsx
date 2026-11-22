import Link from "next/link";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <nav>
      <div className="wrap">
        <Link className="logo" href="/">
          <span className="mark">{site.initials}</span>
          {site.name}
        </Link>
        <div className="links">
          <Link href="/#projects">Projects</Link>
          <Link className="hide-sm" href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
