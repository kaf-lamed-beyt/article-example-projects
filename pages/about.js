import React from "react";
import Header from "../src/components/Header";
import styled from "styled-components";
import Head from "next/head";

const Wrapper = styled.section`
  padding: var(--desktop-pad);
  padding-top: 70px;

  @media only screen and (max-width: 992px) {
    padding: var(--mobile-pad);
  }
`;

export default function AboutPage() {
  return (
    <React.Fragment>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <Wrapper>
        <h1>About Page</h1>
      </Wrapper>
    </React.Fragment>
  );
}
