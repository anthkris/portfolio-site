import React from "react";
import Landing from '../components/Landing.js';
import Experience from '../components/Experience.js';
import How from '../components/How.js';
import Work from '../components/Work.js';
import Footer from '../components/Footer.js';
import Playground from '../components/Playground.js';
import Layout from '../components/layout';

const IndexPage = () =>
    <Layout>
      <Landing/>
      <Work/>
      <Experience/>
      <How/>
      <Playground/>
      <Footer/>
    </Layout>

export default IndexPage;
