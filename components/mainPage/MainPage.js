import "./mainPage.scss";
import { dm_serif_display } from "@/app/fonts";
import Header from "../header/Header";
import Image from "next/image";
import car from "public/images/mainPage/mainCar.svg";

export default function MainPage(params) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main-page">
          <div className="main-page__header">
            <Header />
          </div>
          <h1 className={`${dm_serif_display.className} main-page__title`}>
            Your awesome traffic permit consultant.
          </h1>
          <div className="main-page__button">
            GET STARTED
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
        </div>
      </div>
      <div className="wrapper__car">
        <Image src={car} alt="car" />
      </div>
    </div>
  );
}
