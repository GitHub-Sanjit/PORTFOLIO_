import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/UI/Hero";
import Contact from "../components/UI/Contact";
import Terminal from "../components/UI/Terminal";

import { Container } from "reactstrap";
import SectionSubtitle from "../components/UI/SectionSubtitle";

export default function Home() {
  return (
    <Fragment>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Sanjit Sarkar</title>
        <meta name="title" content="Sanjit Sarkar - Dev and Instructor" />
        <meta
          name="description"
          content="Hi there! My name is Sanjit Sarkar and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.piyushgarg.dev" />
        <meta property="og:title" content="Sanjit Sarkar - Dev and Instructor" />
        <meta
          property="og:description"
          content="Hi there! My name is Sanjit Sarkar and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="og:image"
          content="https://www.piyushgarg.dev/images/seo.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.piyushgarg.dev" />
        <meta
          property="twitter:title"
          content="Sanjit Sarkar - Dev and Instructor"
        />
        <meta
          property="twitter:description"
          content="Hi there! My name is Sanjit Sarkar and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="twitter:image"
          content="https://www.piyushgarg.dev/images/seo.png"
        />
      </Head>
      <Hero />
      <Container className="mt-5">
        <SectionSubtitle subtitle="Terminal" />
        <div
          id="terminal-1"
          style={{ border: "1px solid white", height: "400px" }}
        >
          <Terminal />
        </div>
      </Container>
      <Contact />
    </Fragment>
  );
}
