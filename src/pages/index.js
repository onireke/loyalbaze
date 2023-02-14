import Head from "next/head";

// import Image from "next/image";
import { Inter } from "@next/font/google";
import Nav from "@/components/Nav";

import FirstPage from "@/components/FirstPage";
import Form from "@/components/Form";
import ConsultationPage from "@/components/ConsultationPage";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Loyalbaze - Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <Nav />
        <FirstPage />
        <Form />
        <img src="/images/eclipse1.svg" alt="" className="circle1  " />
        <img src="./images/eclipse2.svg" alt="" className="circle2" />
        <img src="./images/eclipse3.svg" alt="" className="circle3" />
        <img src="./images/star1.svg" alt="" className="star1" />
        <img src="./images/star2.svg" alt="" className="star2" />
        <img src="./images/star3.svg" alt="" className="star3" />
        <img src="./images/star4.svg" alt="" className="star4" />
        <img src="./images/star4.svg" alt="" className="star5" />

        <img
          src="./images/twisted-arrow.svg"
          alt=""
          className="twisted-arrow"
        />
      </section>
      <section className="consultaion-part">
        <ConsultationPage />
        <img src="./images/eclipse4.svg" alt="" className="circle4" />
        <img src="./images/blue-star1.svg" alt="" className="blue-star1" />
        <img src="./images/blue-star2.svg" alt="" className="blue-star2" />
        <img src="./images/star3.svg" alt="" className="star3-2" />
      </section>
      <Footer />
    </>
  );
}
