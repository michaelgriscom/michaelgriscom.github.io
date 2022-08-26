import React from "react";
import Reference from "gatsby-theme-garden/src/components/reference";

import "gatsby-theme-garden/src/components/references-block.css";

const ReferencesBlock = ({ references }) => {
  if (!references.length) {
    return <div className="references-block"></div>;
  }

  return (
    <div className="references-block">
      <h3>Backlinks</h3>
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ReferencesBlock;