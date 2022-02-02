import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";

const User = ({ userId }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  const history = useHistory();
  const handleReturnToAllUsers = () => {
    history.push("/users");
  };

  return (
    <>
      {user ? (
        <>
          <div className="card-body">
            <h1>{user.name}</h1>
            <h2>{`Профессия: ${user.profession.name}`}</h2>
            <QualitiesList qualities={user.qualities} />
            <p>{`Количество Встреч: ${user.completedMeetings}`}</p>
            <h3>{`Рейтинг: ${user.rate}`}</h3>
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={handleReturnToAllUsers}
          >
            Все пользователи
          </button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      ;
    </>
  );
};
User.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default User;
