<template>
  <div id="app" :class="$mq">
    <div class="inner-container">
      <!------- FIELDKIT LOGO --------->

      <div id="logo">
        <img src="./assets/fieldkit-logo.svg" />
      </div>

      <!------- TOP IMAGE + ANIMATED ELEMENTS --------->
      <div id="imageStack" :class="$mq">
        <img
          id="base"
          alt="FieldKit Landscape"
          src="./assets/Fieldkit_Panel 01_Final_no_overlays_sized.jpg"
        />
        <img
          id="clouds"
          alt="FieldKit Landscape"
          src="./assets/Fieldkit_Panel 01_Final_clouds_sized.png"
        />
        <img
          id="signal1"
          alt="FieldKit Landscape"
          src="./assets/Fieldkit_Panel 01_Final_signal1_sized.png"
        />
        <img
          id="signal2"
          alt="FieldKit Landscape"
          src="./assets/Fieldkit_Panel 01_Final_signal2_sized.png"
        />
        <img
          id="signal3"
          alt="FieldKit Landscape"
          src="./assets/Fieldkit_Panel 01_Final_signal3_sized.png"
        />
      </div>

      <!------- 1st PARA --------->
      <div id="intro">
        <TextBlock
          msg="FieldKit is coming."
          msg2="FieldKit lets everyone everywhere monitor the world around them with low-cost, reliable sensors and easy-to-use tools for storing, sharing and telling stories with data."
        />
      </div>
      <div id="scrollDown">
        <div class="hint">Scroll to be notified when FieldKit is ready</div>
        <div class="arrow">
          <img src="./assets/downward-arrow.png" width="30px" height="30px" />
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="inner-container">
      <div class="narrower">
        <!------- 2nd IMG & PARA --------->
        <img
          alt="FieldKit Easy Install"
          src="./assets/Fieldkit_Panel 02_Final_sized.jpg"
        />
        <TextBlock
          msg="Easy-to-use environmental sensing."
          msg2="FieldKit sensors are designed to be accurate, durable and extensible. Our mobile app makes configuration, testing and deployment easy for amateurs and professionals alike."
        />

        <!------- 3rd IMG & PARA --------->
        <img
          alt="FieldKit Easy Install"
          src="./assets/Fieldkit_Panel 03_Final_sized.jpg"
        />
        <TextBlock
          msg="For sensor projects, big and small."
          msg2="FieldKit’s low per-unit cost makes deploying networks of several, dozens, even hundreds of sensors possible - no matter how small the budget."
        />

        <!------- 4th IMG & PARA --------->
        <img
          alt="FieldKit Easy Install"
          src="./assets/Fieldkit_Panel 04_Final_sized.jpg"
        />
        <TextBlock
          msg="Easily explore and share your data."
          msg2="The FieldKit platform securely stores and manages your data, and lets you share and tell stories with it."
        />

        <!------- 5th IMG & PARA --------->
        <img
          alt="FieldKit is for everyone"
          src="./assets/Fieldkit_Panel 05_Final_sized.jpg"
        />
        <TextBlock
          msg="FieldKit is for everyone."
          msg2="We’re building FieldKit because we believe everyone should be able to understand and advocate for the world they live in.

        FieldKit is a tool for field scientists, environmental advocates, naturalists, students and teachers, and most importantly… it’s for you!
        "
        />

      </div> <!-- end narrower -->
    </div>

    <div class="spacer"></div>

    <div class="inner-container">
      <img
        id="campers"
        alt="FieldKit Easy Install"
        src="./assets/Fieldkit_People_01.jpg"
      />
      <div id="help-us" :class=$mq>
        <TextBlock
          msg="Help us make FieldKit."
          msg2="We're trying to learn a bit more about how people might use FieldKit in the real world. Help us by answering a few easy questions (only three or four minutes), and we'll give you a special discount when FieldKit is released."
        />
      </div>
    </div>

    <!------- SURVEY --------->

    <SurveyForm />

    <!------- FOOTER --------->

    <div id="footer">
      <p>Connect with us</p>
      <a href="mailto:everyone@fieldkit.org"><img src="./assets/Email_Icon.svg" /></a>
      <a href="https://www.instagram.com/fieldkitorg/"><img src="./assets/Instagram_Icon.svg" /></a>
      <a href="https://www.twitter.com/fieldkitorg/"><img src="./assets/Twitter_Icon.svg" /></a>
      <p class="top-space">Art by András Ferenczy</p>
    </div>

  </div>
</template>

<script>
//VUE IMPORTS
import TextBlock from "./components/TextBlock.vue";
import SurveyForm from "./components/Survey.vue";

// var cloudX = 0;
var tas = [1.0, 1.0, 1.0];

// setInterval(function() {
//   document.getElementById("clouds").style.left = cloudX + "px";
//   //console.log(Math.floor(cloudX) + "px");
//   cloudX += 0.1;
// }, 30);

setInterval(function() {
  var v1 = document.getElementById("signal1").style.opacity;
  if (v1 == "") v1 = 0;
  var t1 = parseFloat(v1) + (tas[0] - parseFloat(v1)) * 0.01;
  document.getElementById("signal1").style.opacity = t1;

  var v2 = document.getElementById("signal2").style.opacity;
  if (v2 == "") v2 = 0;
  var t2 = parseFloat(v2) + (tas[1] - parseFloat(v2)) * 0.01;
  document.getElementById("signal2").style.opacity = t2;

  var v3 = document.getElementById("signal3").style.opacity;
  if (v3 == "") v1 = 0;
  var t3 = parseFloat(v3) + (tas[2] - parseFloat(v3)) * 0.01;
  document.getElementById("signal1").style.opacity = t3;

  var chance = 0.005;
  if (Math.random() < chance) {
    tas[0] = tas[0] == 1 ? 0 : 1;
  }

  if (Math.random() < chance) {
    tas[1] = tas[1] == 1 ? 0 : 1;
  }

  if (Math.random() < chance) {
    tas[2] = tas[2] == 1 ? 0 : 1;
  }
}, 3);


export default {
  name: "app",
  components: {
    TextBlock,
    SurveyForm
  },
  methods: {
  }
};
</script>

<style>
:root {
  --fk-gray: #2C3E50;
  --fk-red: #CE596B;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--fk-gray);
  font-size: 20px;
  margin: 0 auto;
  max-width: 980px;
}
#app.mobile {
  font-size: 16px;
}
.inner-container {
  max-width: 780px;
  margin: auto;
}
#app.mobile .inner-container {

}
#app .narrower {
  width: 85%;
  margin: auto;
}
#app.mobile .narrower {
  max-width: 300px;
}

#logo img {
  margin-top: 4em;
  width: 305px;
}
#app.mobile #logo img {
  margin-top: 40px;
  width: 164px;
}
img {
  max-width: 100%;
}
#imageStack.desktop img {
  max-width: 125%;
  margin-left: -10%;
}

#imageStack {
  position: relative;
}

#intro h1 {
  font-size: 36px;
  font-weight: bold;
}
h1 {
  font-size: 32px;
}
#app.mobile #intro {
  max-width: 300px;
  margin: auto;
}
#app.mobile #intro h1 {
  font-size: 24px;
  margin: 0;
}
#app.mobile h1 {
  font-size: 22px;
}
#intro p {
  font-size: 24px;
}
#app.mobile #intro p {
  font-size: 18px;
}

p {
  font-size: 20px;
}
#app.mobile p {
  font-size: 16px;
}

#clouds,
#signal1,
#signal2,
#signal3 {
  visibility: visible;
  position: absolute;
  left: 0;
  top: 0;
}

#clouds {
  z-index: 1;
}

#scrollDown {
  padding-bottom: 7%;
  margin-bottom: 7%;
}
.spacer {
  border-bottom: 1px solid #CCCDCF;
}

#campers {
  width: 70%;
}

#help-us.mobile {
  padding: 1em;
}

.hint {
  font-weight: lighter;
  font-size: 14px;
  margin-bottom: -5px;
}

#footer {
  margin: 60px 0;
}
#footer img {
  margin: 0 8px;
}
.top-space {
  margin-top: 40px;
}

</style>
