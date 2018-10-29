import React from "react";
const UserInput = ({ postcode, search, setPostcode }) => {
  return (
    <div>
      <h1>Search Grants</h1>
      <form onSubmit={search}>
        <input
          type="text"
          value={postcode}
          onChange={setPostcode}
          placeholder={"postcode"}
          name="postcode"
          required
        />{" "}
        <button className="btn-primary">Search</button>
      </form>{" "}
    </div>
  );
};
export default UserInput;
