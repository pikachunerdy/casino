import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Feature from "../../components/page/About/Feature";
import SinupContainer from "../../components/page/About/SinupContainer";
import CTA from "../../components/page/About/CTA";
import FAQ from "../../components/page/About/FAQ";

const About = () => {
  return (
    <Layout>
      <div className="mt-[100px] flex flex-col">
        <CTA />
        <Feature />
        <FAQ />
        <SinupContainer />
      </div>
    </Layout>
  );
};

export default About;
