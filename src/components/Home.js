import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div style={{ backgroundColor: "#f8f9fa", textAlign: "center" }}>
      <h1>Hi I Am</h1>
      <h1 style={{ color: "#fbbe5c" }}>Manoj Lamichhane</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 100,
        }}
      >
        <p
          style={{
            width: "65%",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 50,
          }}
        >
          I would express myself as a passionate and industrious student with an
          appetite for learning and enhancing new technical abilities to
          corporate with the rapidly changing technical world. Pushing myself to
          the absolute limit, I wish to find the solutions of problem I face
          while modeling the real work scenario. Wishing to find the bridge
          between the academic and job based learning so that I can improve and
          be a perfect professional.
        </p>
        <p
          style={{
            width: "35%",
            backgroundColor: "#fbbe5c",
            padding: 20,
            borderRadius: 50,
          }}
        >
          To start from the scratch on how one becomes a professional engineer
          after completing academic education with the objectives of the
          organization always in mind and perform the tasks allocated without
          any deviation within the specified time and budget.
        </p>
      </div>
      <div>
        <Link to="/Contact">
          <Button
            style={{
              marginTop: 100,
              marginBottom: 60,
              backgroundColor: "#fbbe5c",
              width: 200,
              height: 50,
              borderRadius: 25,
            }}
            variant="contained"
          >
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
