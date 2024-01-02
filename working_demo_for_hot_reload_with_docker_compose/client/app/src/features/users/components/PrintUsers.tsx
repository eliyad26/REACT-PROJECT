import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import User from "../interfaces/User";

const PrintUsers: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div>
      {users.map((user: User) => (
        <div key={user._id}>{user.name}</div>
      ))}
    </div>
  );
};

export default PrintUsers;
