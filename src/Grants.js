import React from "react";
import RenderGrants from "./RenderGrants";
import TableHeader from "./TableHeader";
const Grants = ({ grants}) => {
  return (
    <table className="table table-dark">
      <TableHeader />
      {grants.map((grant, key) => (
        <RenderGrants  grant={grant} key={key} />
      ))}
    </table>
  );
};
export default Grants;
