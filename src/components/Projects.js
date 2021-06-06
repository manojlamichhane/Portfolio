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

function Projects(props) {
  return (
    <div style={{ padding: 80 }}>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <a href="https://infallible-hawking-a9f66e.netlify.app/">
            <img
              src={reactCrud}
              alt="react-project"
              style={{ width: 580, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <a href="https://manoj9-movies.netlify.app/">
            <img
              src={reactMovies}
              alt="react-project"
              style={{ width: 580, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/reactNativeUIs.git">
            <img
              src={rnui2}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/reactNativeUIs.git">
            <img
              src={rnui3}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/reactNativeUIs.git">
            <img
              src={rnuifood}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/reactNativeUIs.git">
            <img
              src={rnuifoods}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/reactNativeUIs.git">
            <img
              src={rnuiattendance}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/FireBaseApplication">
            <img
              src={rnapp}
              alt="reactnative-app"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>

        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/RNonbarding.git">
            <img
              src={rnui1}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/RNonbarding.git">
            <img
              src={rnui4}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/RNonbarding.git">
            <img
              src={rnui5}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <a href="https://github.com/manojlamichhane/reactNativeUIs.git">
            <img
              src={rnuiAnalogClock}
              alt="reactnative-ui"
              style={{ width: 185, height: 300 }}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
