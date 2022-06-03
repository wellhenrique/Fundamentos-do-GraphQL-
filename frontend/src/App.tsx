import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

interface IUser {
  id: string;
  name: string;
}

function App() {
  const { data, loading } = useQuery<{ users: IUser[] }>(GET_USER);

  if (loading) return <p>Carregando...</p>;

  return (
    <ul>
      {data?.users.map((user: IUser) => (
        <li key={user.id}>
          <p>{user.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
