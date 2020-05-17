import React from "react";
import Link from "next/link";
import Head from "next/head";
import withAnalytics from "../src/hocs/withAnalytics";

function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Users</title>
        </Head>

        <h1>Hello Word</h1>

        <img src="public/city.png" />

        <Link href="/users">
          <a>Voltar</a>
        </Link>
      </div>
    </>
  );
}

export default withAnalytics()(Home);
