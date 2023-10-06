import Link from "next/link";
import "./header.scss";
import Image from "next/image";

export default function Header(params) {
  return (
    <div className="header container">
      <div className="header__logo">
        <Link href={"/"}>
          <Image
            priority
            src="/images/header/logo.svg"
            alt="logo"
            width={212}
            height={50}
          />
        </Link>
      </div>
      <div className="header__links">
        <Link href="#about">About</Link>
        <Link href="#howto">How to</Link>
        <Link href="#faqs">Faqs</Link>
        <Link href="#contacts">
          <div className="links__button">CONTACT US</div>
        </Link>
      </div>
    </div>
  );
}
