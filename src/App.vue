<template>
  <div id="app">
    <!------- FIELDKIT LOGO --------->

    <div id="logo">
      <img src="./assets/fieldkit-logo.svg" />
    </div>

    <!------- TOP IMAGE + ANIMATED ELEMENTS --------->
    <div id="imageStack">
      <img
        id="base"
        class="wider"
        alt="FieldKit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_no_overlays_sized.png"
      />
      <img
        id="clouds"
        class="wider"
        alt="FieldKit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_clouds_sized.png"
      />
      <img
        id="signal1"
        class="wider"
        alt="FieldKit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_signal1_sized.png"
      />
      <img
        id="signal2"
        class="wider"
        alt="FieldKit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_signal2_sized.png"
      />
      <img
        id="signal3"
        class="wider"
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
        src="./assets/Fieldkit_Panel 05_Final_sized.png"
      />
      <TextBlock
        msg="FieldKit is for everyone."
        msg2="We’re building FieldKit because we believe everyone should be able to understand and advocate for the world they live in.

      FieldKit is a tool for field scientists, environmental advocates, naturalists, students and teachers, and most importantly… it’s for you!
      "
      />

      <div id="contentEnd"></div>
    </div> <!-- end narrower -->

    <img
      id="campers"
      alt="FieldKit Easy Install"
      src="./assets/Fieldkit_People_01.png"
    />
    <div id="help-us" :class=$mq>
      <TextBlock
        msg="Help us make FieldKit."
        msg2="We're trying to learn a bit more about how people might use FieldKit in the real world. Help us by answering a few easy questions (only three or four minutes), and we'll give you a special discount when FieldKit is released."
      />
    </div>

    <SurveyForm />

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
  --fk-gray: #264052;
  --fk-red: #cc6575;
}

#logo img {
  margin-top: 4em;
  width: 40%;
  min-width: 220px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--fk-gray);
  max-width: 765px;
  margin: 0 auto;
}
#app .narrower {
  width: 85%;
  margin-left: 7.5%;
}

img {
  max-width: 100%;
}
img.wider {
  max-width: 125%;
  margin-left: -10%;
}

#imageStack {
  position: relative;
}

h1 {
  font-size: 2em;
}
#intro h1 {
  font-size: 2.25em;
}

h3 {
  font-weight: normal;
  color: grey;
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

#scrollDown,
#contentEnd {
  padding-bottom: 7%;
  border-bottom: 1px solid #cccccc;
}

#campers {
  width: 70%;
}

p {
  font-size: 1.15em;
}
#intro p {
  font-size: 1.45em;
}
.hint {
  font-weight: lighter;
  font-size: 0.9em;
  margin-bottom: -5px;
}


</style>
