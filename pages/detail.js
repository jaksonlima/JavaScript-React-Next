import React from "react";
import axios from "axios";
import Link from "next/link";

const Detail = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <img src={user.avatar_url} width="200px" height="200px" />

    <Link href="/users">
      <a>Voltar</a>
    </Link>
  </div>
);

Detail.getInitialProps = async ({ query }) => {
  const reponse = await axios.get(`https://api.github.com/users/${query.user}`);

  return { user: reponse.data };
};

export default Detail;
