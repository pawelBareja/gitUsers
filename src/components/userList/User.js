import React, { useState } from "react";
import Button from "../buttons/Button";
import Message from "../messages/Message";
import "./users.css";

const User = ({ usersData }) => {
  const users = usersData.search.edges;
  const [userID, setUserID] = useState([]);

  const toggleUserDescription = (id) => {
    if (userID.indexOf(id) !== -1) {
      setUserID(userID.filter((el) => el !== id));
    } else {
      setUserID((userID) => [...userID, id]);
    }
  };

  return (
    <>
      <div className="container">
        {users.length > 0 ? (
          users.map(({ node }) => (
            <div className="user" key={node.id}>
              <img src={node.avatarUrl} alt={node.login} />
              <div className="user__text">
                <p>{node.name || noDataText}</p>
                <p>Login: {node.login || noDataText}</p>
                <p>Email: {node.email || noDataText}</p>
                {userID.indexOf(node.id) !== -1 && (
                  <p>Bio: {node.bio || noDataText}</p>
                )}
              </div>
              <Button
                classBtn={"secondary"}
                handleClick={() => toggleUserDescription(node.id)}
                buttonText={
                  userID.indexOf(node.id) !== -1 ? "Hide" : "Show more"
                }
              />
            </div>
          ))
        ) : (
          <Message customClass={"info"}>
            <p>Nothing has been found !</p>
          </Message>
        )}
      </div>
    </>
  );
};

const noDataText = "Brak danych";

export default User;
