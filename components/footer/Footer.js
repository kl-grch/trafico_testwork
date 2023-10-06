import "./footer.scss";
import Image from "next/image";

export default function Footer(params) {
  return (
    <footer className="footer container">
      <div className="footer__copyright">Copyright @ 2019</div>
      <div className="footer__links">
        <a href="https://www.facebook.com/">
          <Image
            src="/images/footer/facebook.svg"
            alt="facebook"
            width={36}
            height={36}
          />
        </a>
        <a href="https://twitter.com/">
          <Image
            src="/images/footer/twitter.svg"
            alt="twitter"
            width={36}
            height={36}
          />
        </a>
        <a href="https://www.instagram.com/">
          <Image
            src="/images/footer/instagram.svg"
            alt="instagram"
            width={36}
            height={36}
          />
        </a>
      </div>
    </footer>
  );
}
