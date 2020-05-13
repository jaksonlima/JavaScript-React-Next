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
        <img src="/static/shang.jpg" width="200" />

        <h1>Hello Word</h1>

        <Link href="/users">
          <a>Voltar</a>
        </Link>
      </div>
    </>
  );
}

export default withAnalytics()(Home);
