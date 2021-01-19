import React from "react";
import "./form.css";

const Form = ({ inputValues, handleFormInput, handleSubmit }) => {
  return (
    <div className="container">
      <form>
        <select
          name="query_type"
          onChange={handleFormInput}
          value={inputValues.query_type}
        >
          <option value="Login">Login</option>
          <option value="Name">Name</option>
          <option value="E-mail">E-mail</option>
        </select>
        <input
          placeholder="Write name"
          name="query_value"
          type="text"
          value={inputValues.query_value}
          onChange={handleFormInput}
        />
        <button
          className="btn btn--primary"
          type="submit"
          onClick={handleSubmit}
        >
          Click
        </button>
      </form>
    </div>
  );
};

export default Form;
