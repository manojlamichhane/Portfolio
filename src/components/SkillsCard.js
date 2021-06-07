import React from "react";

function SkillsCard(props) {
  return (
    <div style={{ paddingTop: 15 }}>
      <img
        src={props.source}
        alt={props.title}
        style={{ width: 195, height: 230 }}
      />
    </div>
  );
}

export default SkillsCard;
