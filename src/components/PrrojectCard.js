import React from "react";

function PrrojectCard(props) {
  return (
    <div style={{ paddingTop: 25 }}>
      <a href={props.link}>
        <img
          src={props.source}
          alt="reactnative-ui"
          style={{ width: 190, height: 300 }}
        />
      </a>
    </div>
  );
}

export default PrrojectCard;
