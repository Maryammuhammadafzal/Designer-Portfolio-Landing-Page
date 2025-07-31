import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import FeaturesPage from "./features/page";
import HelpPage from "./help/page";
import HeroPage from "./hero/Page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage />
      <AboutPage />
      <FeaturesPage />
      <HelpPage />
      <ContactPage />
    </div>
  );
}
