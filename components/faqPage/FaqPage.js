"use client";

import "./faqPage.scss";
import { dm_serif_display } from "@/app/fonts";
import Image from "next/image";
import faqImg from "public/images/faqPage/faq.png";
import CardFaq from "../cardFaq/CardFaq";

export default function FaqPage(params) {
  return (
    <section className="faq container" id="faqs">
      <div className="faq__background"></div>

      <div className="faq__header">
        <h2 className="header__title">FAQ</h2>
        <div className={`${dm_serif_display.className} header__descr`}>
          Questions and Answers on Professional Traffic Permits:
        </div>
        <div className="header__img">
          <Image src={faqImg} alt="faq img" />
        </div>
      </div>
      <div className="faq__items">
        <CardFaq
          title={"What is a professional traffic permit?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />
        <CardFaq
          title={"How to check the traffic condition?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={"What are the requirements for a professional traffic permit?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={
            "Are there professional traffic permit training courses at a distance?"
          }
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={"When is a professional traffic permit needed?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={"Where to look for a traffic permit?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={
            "Are there differences between a traffic permit and a professional traffic permit?"
          }
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={"How much does a commercial traffic permit cost for goods?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={
            "What is a professional traffic permit?How to plug in for the traffic permit test?"
          }
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />{" "}
        <CardFaq
          title={"How is the sample for a professional traffic permit booked?"}
          descr={
            "Traffic permits are a requirement for conducting professional traffic."
          }
        />
      </div>
      <div className="faq__button">
        <div className="button__button">LOAD MORE</div>
        <div className="button__plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect x="9" width="2" height="20" fill="#EE4D47" />
            <rect
              x="20"
              y="9"
              width="2"
              height="20"
              transform="rotate(90 20 9)"
              fill="#EE4D47"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
