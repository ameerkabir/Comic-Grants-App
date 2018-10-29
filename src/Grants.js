import React from "react";
import RenderGrants from "./RenderGrants";
const Grants = ({ grants }) => {
  return (
    <div>
      {grants.map(grant => (
        <RenderGrants grant={grant} />
      ))}
    </div>
  );
};

export default Grants;
