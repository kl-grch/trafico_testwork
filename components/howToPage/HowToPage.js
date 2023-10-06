import Image from "next/image";
import "./howToPage.scss";
import howToImg from "public/images/howToPage/howto.png";

export default function HowToPage(params) {
  return (
    <section className="how-to container" id="howto">
      <div className="how-to__img">
        <Image src={howToImg} alt="how to img" />
      </div>
      <div className="how-to__info">
        <h2 className="info__title">How to apply</h2>
        <div className="info__descr">
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company{"'"}s company signer
          or CEO.
        </div>
      </div>
    </section>
  );
}
