import React from "react";
import Link from "next/link";
import Head from "next/head";
import withAnalytics from "../src/hocs/withAnalytics";
import styled from "styled-components";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Users</title>
        </Head>

        <Title>Hello Word</Title>

        <img src="public/city.png" />

        <Link href="/users">
          <a>Voltar</a>
        </Link>
      </div>
    </>
  );
}

export default withAnalytics()(Home);
