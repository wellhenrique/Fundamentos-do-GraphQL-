import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { NewUserForm } from "./components/NewUserForm";

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
    <div>
      <ul>
        {data?.users.map((user: IUser) => (
          <li key={user.id}>
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
      <NewUserForm />
    </div>
  );
}

export default App;
