"use client";

import { useEffect, useState } from "react";
import CardTesti from "../cardTesti/CardTesti";
import "./testiPage.scss";
import { dm_serif_display } from "@/app/fonts";

export default function TestiPage() {
  const [order1, setOrder1] = useState(1);
  const [order2, setOrder2] = useState(2);
  const [order3, setOrder3] = useState(2);

  const handleClickLeft = (e) => {
    if (order1 === 2) {
      setOrder1(1);
      setOrder2(2);
      setOrder3(3);
    } else if (order1 === 3) {
      setOrder1(2);
      setOrder2(3);
      setOrder3(1);
    }
  };

  const handleClickRight = () => {
    if (order1 === 1) {
      setOrder1(2);
      setOrder2(3);
      setOrder3(1);
    } else if (order1 === 2) {
      setOrder1(3);
      setOrder2(1);
      setOrder3(2);
    }
  };

  return (
    <div className="testi-page container">
      <h2 className="testi-page__title">ABOUT US</h2>
      <div className={`${dm_serif_display.className} testi-page__descr`}>
        Out Awesome
        <br /> Clients
      </div>
      <div className="testi-page__cards">
        <CardTesti
          order={order1}
          review={
            "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee."
          }
          user={{
            name: "Isak Pettersson",
            img: "/images/testiPage/Isak_Pettersson.png",
          }}
        />
        <CardTesti
          order={order2}
          review={
            "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan."
          }
          user={{
            name: "Simon Sandberg",
            img: "/images/testiPage/Simon_Sandberg.png",
          }}
        />
        <CardTesti
          order={order3}
          review={
            "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct"
          }
          user={{
            name: "Isak Pettersson",
            img: "/images/testiPage/Isak_Pettersson2.png",
          }}
        />
      </div>
      <div className="testi-page__arrows">
        <div className="arrows__left" onClick={handleClickLeft}>
          <svg
            width="30"
            height="13"
            viewBox="0 0 30 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={order1 === 1 ? 0.5 : 1}
              d="M5.61152 -1.25788e-05L5.40054e-07 6.17748L1 7.27834L1 7.35108L1.06607 7.35108L5.61152 12.355L7.0914 11.0086L3.76899 7.35108L29.5 7.35108L29.5 5.35108L3.45361 5.35108L7.0914 1.34638L5.61152 -1.25788e-05Z"
              fill="#ED4D47"
            />
          </svg>
        </div>
        <div className="arrows__right" onClick={handleClickRight}>
          <svg
            width="30"
            height="13"
            viewBox="0 0 30 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={order1 === 3 ? 0.5 : 1}
              d="M23.8875 12.355L29.499 6.17749L28.499 5.07664V5.0039H28.433L23.8875 0L22.4076 1.3464L25.73 5.0039L-0.000976562 5.0039L-0.000976562 7.0039L26.0454 7.0039L22.4076 11.0086L23.8875 12.355Z"
              fill="#ED4D47"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
