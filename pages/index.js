import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import GoogleReviewsCard from "../components/misc/GoogleReviewsCard";

export default function Home() {
  return (
    <>
      <SeoHead title='800Mechanic Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        {/* <GoogleReviewsCard />  */}
      </Layout>
    </>
  );
}
