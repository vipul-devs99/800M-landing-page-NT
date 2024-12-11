import Feature from "../components/Feature";
import WhyChooseUs from "../components/WhyChooseUs";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import GoogleReviewsCard from "../components/misc/GoogleReviewsCard";
import HowItWorks from "../components/Layout/HowItWorks";
import TrustSection from "../components/Layout/TrustSection";
import Emergency from "../components/Emergency";
import BatterySection from "../components/BatterySection";

export default function Home() {
  return (
    <>
      <SeoHead title='800Mechanic Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <TrustSection />
        <WhyChooseUs />
        <HowItWorks />
        <BatterySection />
        <Emergency />
        {/* <GoogleReviewsCard />  */}
        
      </Layout>
    </>
  );
}
