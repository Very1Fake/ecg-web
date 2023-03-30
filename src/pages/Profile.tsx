import { Component } from "solid-js";

enum UserStatus {
  Active = 0,
  Inactive,
  Banned,
}

type User = {
  username: string;
  email: string;
  status: UserStatus;
};

const Profile: Component<{}> = () => {
  const user: User = {
    username: "very1fake",
    email: "very1fake@example.com",
    status: 0,
  };

  return (
    <section>
      <h2>Profile - {user.username}</h2>
      <ul>
        <li>Email: {user.email}</li>
        <li>Status: {UserStatus[user.status]}</li>
      </ul>
    </section>
  );
};

export default Profile;
