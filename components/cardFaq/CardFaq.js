"use client";

import { useState } from "react";
import "./cardFaq.scss";
import clsx from "clsx";

export default function CardFaq({ title, descr, isActive = false, style }) {
  const [active, setActive] = useState(isActive);
  return (
    <div
      className="card-faq"
      style={
        active
          ? { height: "250px", alignSelf: "flex-start" }
          : { height: "90px" }
      }
    >
      <div
        className="card-faq__card"
        style={active ? { zIndex: 2 } : { zIndex: 0 }}
      >
        <div className="card__title">{title}</div>
        <div className="card__button" onClick={() => setActive(!active)}>
          {!active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <rect x="9" y="0.162109" width="2" height="20" fill="#EE4D47" />
              <rect
                x="20"
                y="9.16211"
                width="2"
                height="20"
                transform="rotate(90 20 9.16211)"
                fill="#EE4D47"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <rect
                x="20"
                y="9.16211"
                width="2"
                height="20"
                transform="rotate(90 20 9.16211)"
                fill="#EE4D47"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={clsx("card-faq__descr", {
          "card-faq__descr--active": active,
        })}
      >
        {descr}
      </div>
    </div>
  );
}
