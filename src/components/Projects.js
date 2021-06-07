import React from "react";
import Grid from "@material-ui/core/Grid";
import reactCrud from "../assets/screenshot-crud.png";
import reactMovies from "../assets/screenshot-movies.png";
import rnui1 from "../assets/Screenshot_rnui1.jpg";
import rnui2 from "../assets/Screenshot_rnui2.jpg";
import rnui3 from "../assets/Screenshot_rnui3.jpg";
import rnui4 from "../assets/Screenshot_rnui4.jpg";
import rnui5 from "../assets/Screenshot_rnui5.jpg";
import rnuifood from "../assets/Screenshot_food.jpg";
import rnuifoods from "../assets/Screenshot_foods.jpg";
import rnuiattendance from "../assets/Screenshot_attendance.jpg";
import rnuiAnalogClock from "../assets/Screenshot_Analog_Clock.jpg";
import rnapp from "../assets/site-logo.png";
import PrrojectCard from "./PrrojectCard";

function Projects(props) {
  return (
    <div style={{ paddingLeft: 30, paddingRight: 30 }}>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <a href="https://infallible-hawking-a9f66e.netlify.app/">
            <img
              src={reactCrud}
              alt="react-project"
              style={{ width: 620, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <a href="https://manoj9-movies.netlify.app/">
            <img
              src={reactMovies}
              alt="react-project"
              style={{ width: 620, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/reactNativeUIs.git"
            source={rnui2}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/reactNativeUIs.git"
            source={rnui3}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/reactNativeUIs.git"
            source={rnuifood}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/reactNativeUIs.git"
            source={rnuifoods}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/reactNativeUIs.git"
            source={rnuiattendance}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/FireBaseApplication"
            source={rnapp}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/RNonbarding.git"
            source={rnui1}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/RNonbarding.git"
            source={rnui4}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/RNonbarding.git"
            source={rnui5}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <PrrojectCard
            link="https://github.com/manojlamichhane/reactNativeUIs.git"
            source={rnuiAnalogClock}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
