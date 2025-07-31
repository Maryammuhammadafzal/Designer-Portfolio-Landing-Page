import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HeroPage from "./hero/Page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
<HeroPage/>
<AboutPage/>
<ContactPage/>
    </div>
  );
}
