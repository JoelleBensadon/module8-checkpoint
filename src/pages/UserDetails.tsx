import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import type { User } from "../types/User";

function UserDetails() {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [user, setUser] =
    useState<User | null>(
      null
    );

  useEffect(() => {

    async function loadUser() {

      const response =
        await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

      const data =
        await response.json();

      setUser(data);
    }

    loadUser();

  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <h1>{user.name}</h1>

      <p>
        Username:
        {user.username}
      </p>

      <p>
        Email:
        {user.email}
      </p>

      <p>
        Phone:
        {user.phone}
      </p>

      <button
        onClick={() =>
          navigate("/users")
        }
      >
        Back to Users
      </button>

    </div>
  );
}

export default UserDetails;