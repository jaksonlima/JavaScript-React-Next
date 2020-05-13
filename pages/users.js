import React from "react";
import axios from "axios";
import Link from "next/link";
import withAnalytics from "../src/hocs/withAnalytics";

const User = ({ repos }) => {
  return (
    <>
      <div>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </div>
    </>
  );
};

User.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/users/jaksonlima/repos"
  );

  return { repos: response.data };
};

export default withAnalytics()(User);
