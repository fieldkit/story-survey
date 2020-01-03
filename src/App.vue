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
        <div id="cloud-wrapper" :class="$mq">
          <img
            id="clouds"
            alt="FieldKit Landscape"
            src="./assets/Fieldkit_Panel 01_Final_clouds_sized.png"
          />
        </div>
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
    </div>

    <div class="inner-container">
      <div id="help-us" :class=$mq>
        <TextBlock
          msg="Help us make FieldKit."
          msg2="We're trying to learn a bit more about how people might use FieldKit in the real world. Help us by answering a few easy questions (only 3-4 minutes)."
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

var cloudX = 0;
var tas = [1.0, 1.0, 1.0];

function moveClouds() {
  document.getElementById("clouds").style.left = cloudX + "px";
  cloudX += 0.1;
  if (cloudX > 745) {cloudX = 0;}
}

function blinkSignals() {
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
}


export default {
  name: "app",
  components: {
    TextBlock,
    SurveyForm
  },
  mounted() {
    if(this.$mq == "desktop") {
      setInterval(moveClouds, 30);
    }
    setInterval(blinkSignals, 3);
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
  max-width: 785px;
}
#app.mobile {
  font-size: 16px;
}
.inner-container {
  max-width: 700px;
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

#cloud-wrapper {
  width: 624px;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
#cloud-wrapper.mobile {
  display: none;
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
  padding-bottom: 20px;
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
