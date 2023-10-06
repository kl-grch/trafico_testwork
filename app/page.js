import AboutPage from "@/components/aboutPage/AboutPage";
import "./mainPage.scss";
import Footer from "@/components/footer/Footer";
import MainPage from "@/components/mainPage/MainPage";
import HowToPage from "@/components/howToPage/HowToPage";
import FaqPage from "@/components/faqPage/FaqPage";
import TestiPage from "@/components/testiPage/TestiPage";
import FooterPage from "@/components/footerPage/FooterPage";

export default function Home() {
  return (
    <main>
      <MainPage />
      <AboutPage />
      <HowToPage />
      <FaqPage />
      <TestiPage />
      <FooterPage />
      <Footer />
    </main>
  );
}
