import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/aboutme";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import Masthead from "../components/masthead";
import Offer from "../components/offer";
import TrustedBy from "../components/trustedby";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZACHURI | Dev</title>
        <meta name="zachuri" content="zachuri portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutMe />
      <Offer />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
