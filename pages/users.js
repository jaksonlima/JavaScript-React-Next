import React from "react";
import axios from "axios";
import Link from "next/link";
import withAnalytics from "../src/hocs/withAnalytics";

const User = ({ users }) => {
  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.login}
              <Link href={`/users/${user.login}`}>
                <a> | Acessar Perfil</a>
              </Link>
            </li>
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
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};

export default withAnalytics()(User);
