import Image from "next/image";
import "./aboutPage.scss";
import about from "public/images/aboutPage/about.svg";

export default function AboutPage(params) {
  return (
    <section className="about-page container" id="about">
      <div className="about-page__info">
        <h2 className="info__title">ABOUT US</h2>
        <div className="info__descr">
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.
        </div>
        <div className="info__question">
          How do you do when you need to obtain a commercial traffic permit for
          freight transport to your business?
        </div>
      </div>
      <div className="about__img">
        <Image src={about} alt="about img" />
      </div>
    </section>
  );
}
