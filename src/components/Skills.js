import React from "react";
import Grid from "@material-ui/core/Grid";
import SkillsCard from "./SkillsCard";

function Skills(props) {
  return (
    <div style={{ paddingLeft: 30, paddingRight: 30 }}>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="data:image/png;base64,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"
            title="HTML"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            title="CSS"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://www.w3schools.com/whatis/img_js.png"
            title="JS"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://www.emailjs.com/logo.png"
            title="EmailJS"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
            title="formik"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://pterolex.github.io/presentation-build-your-own-rn/images/react-logo.png"
            title="React"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://www.loginradius.com/blog/async/static/a53096b6796dd3d1e3f3df8bc77a6689/03979/index.png"
            title="react-router"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://cms-assets.tutsplus.com/uploads/users/1795/posts/30350/preview_image/ReduxLogo.jpg"
            title="redux"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg"
            title="react-native"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://reactnavigation.org/img/spiro.svg"
            title="react-navigation"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="data:image/jpeg;base64,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"
            title="visual-studio"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="data:image/png;base64,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"
            title="material-ui"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://static.axios.com/img/axios-site/axios-placeholder-1x1.png"
            title="axios"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="https://www.gstatic.com/devrel-devsite/prod/v1674d466be3b1154327dd11cf186e748303b1e92ae31ff35df0f5192fbd777ea/firebase/images/touchicon-180.png"
            title="firebase"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <SkillsCard
            source="data:image/jpeg;base64,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"
            title="reactnative-paper"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
