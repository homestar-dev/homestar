import {
  About,
  FaQu,
  Footer,
  Hero,
  ContactForm,
  Services,
  Reviews,
  Activities,
  ParallaxLogo,
  FadeInOnScroll,
} from "@/components";
import { Features } from "@/components/sections/features/Features";

export default function Home() {
  return (
    <div>
      <FadeInOnScroll threshold={0.3} children={<About />} />
      <FadeInOnScroll threshold={0.3} children={<Features />} />
      <FadeInOnScroll threshold={0.3} children={<Services />} />
      <ParallaxLogo />
      <FadeInOnScroll threshold={0.3} children={<Reviews />} />
      <FadeInOnScroll threshold={0.3} children={<Activities />} />
      <FadeInOnScroll threshold={0.3} children={<FaQu />} />
      <FadeInOnScroll threshold={0.3} children={<ContactForm />} />
      <Footer />
    </div>
  );
}
