import Link from "next/link";
import Image from "next/image";
import "./footerPage.scss";

export default function FooterPage(params) {
  return (
    <div className="footer-page container" id="contacts">
      <div className="footer-page__background">
        <div className="background__line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="817"
            height="457"
            viewBox="0 0 817 457"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M-216 316.609C-166.999 252.887 -37.2115 128.63 89.9269 141.375C248.85 157.305 -53.1039 456 89.9269 456C232.958 456 300.5 89.6007 403.8 89.6007C507.1 89.6007 288.581 360.418 403.8 376.348C519.019 392.278 614.373 -5.9817 741.512 -9.9643C868.65 -13.9469 610.4 316.609 817 316.609"
              stroke="url(#paint0_linear_523_0)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_523_0"
                x1="300.5"
                y1="100.318"
                x2="300.5"
                y2="558.71"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F37753" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="background__car"></div>
      </div>
      <div className="footer-page__form">
        <div className="form__info">
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
        </div>
        <div className="form__form">
          <form action="">
            <div className="form__name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
              ></input>
            </div>
            <div className="form__name">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email address"
              ></input>
            </div>
            <button type="submit">
              Get started
              <div className="button__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                >
                  <path
                    d="M23.8885 12.355L29.5 6.17749L28.5 5.07664V5.0039H28.4339L23.8885 0L22.4086 1.3464L25.731 5.0039L0 5.0039L0 7.0039L26.0464 7.0039L22.4086 11.0086L23.8885 12.355Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-page__header">
        <div className="header__logo">
          <Link href={"/"}>
            <Image
              priority
              src="/images/header/logo.svg"
              alt="logo"
              width={170}
              height={41}
            />
          </Link>
        </div>
        <div className="header__links">
          <Link href="#about">About</Link>
          <Link href="#howto">How to</Link>
          <Link href="#faqs">Faqs</Link>
        </div>
      </div>
    </div>
  );
}
