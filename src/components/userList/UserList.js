import React, { useState } from "react";
import { useLazyQuery } from "react-apollo";
import Loader from "react-loader-spinner";
import Form from "../form/Form.js";
import User from "./User";
import Message from "../messages/Message";
import { GET_USERS } from "../../utils/queries.js";
import queryParameters from "../../utils/queryParameters";
import { validateInput } from "../form/validateInput";

const UserList = () => {
  const [displayError, setDisplayError] = useState(false);
  const [inputValues, setInputValues] = useState({
    query_value: "",
    query_type: "Login",
  });

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { query_value, query_type } = inputValues;
    let validated = validateInput(query_value, query_type, setDisplayError);
    if (validated) {
      getUsers(queryParameters(query_value));
    }
  };

  const [getUsers, { loading, error, data }] = useLazyQuery(GET_USERS);

  if (loading)
    return (
      <Loader
        style={{ width: "100%", textAlign: "center" }}
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
      />
      // <p style={{ textAlign: "center" }}>..loading</p>
    );
  if (error) {
    console.log(`Error! ${error}`);
    return (
      <Message customClass={"info"}>
        <p>
          Upps, something went wrong, please check your internet connection and
          try again
        </p>
      </Message>
    );
  }

  return (
    <p>
      <Form
        inputValues={inputValues}
        handleFormInput={handleFormInput}
        handleSubmit={handleSubmit}
      />

      {displayError && (
        <Message customClass={"warning"}>
          <p>{displayError}</p>
        </Message>
      )}

      {data && <User usersData={data} />}
    </p>
  );
};

export default UserList;
