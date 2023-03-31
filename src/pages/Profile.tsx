import { Component } from "solid-js";
import { useAuth } from "../utils/AuthContext";
import { UserStatus } from "../types/User";

const Profile: Component<{}> = () => {
  const [state] = useAuth();

  return (
    <section>
      <h2>Profile - {state.user.username}</h2>
      <ul>
        <li>Email: {state.user.email}</li>
        <li>Status: {UserStatus[state.user.status]}</li>
      </ul>
    </section>
  );
};

export default Profile;
