import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import type { User } from "../types/User";

function Users() {

  const [users, setUsers] =
    useState<User[]>([]);

  useEffect(() => {

    async function loadUsers() {

      const response =
        await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

      const data =
        await response.json();

      setUsers(data);
    }

    loadUsers();

  }, []);

  return (
    <div>

      <h1>User Directory</h1>

      {users.map((user) => (

        <div key={user.id}>

          <Link
            to={`/users/${user.id}`}
          >
            {user.name}
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Users;