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
        alt="Fieldkit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_no_overlays.png"
      />
      <img
        id="clouds"
        alt="Fieldkit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_clouds.png"
      />
      <img
        id="signal1"
        alt="Fieldkit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_signal1.png"
      />
      <img
        id="signal2"
        alt="Fieldkit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_signal2.png"
      />
      <img
        id="signal3"
        alt="Fieldkit Landscape"
        src="./assets/Fieldkit_Panel 01_Final_signal3.png"
      />
    </div>

    <!------- 1st PARA --------->
    <TextBlock
      msg="Fieldkit is coming."
      msg2="Fieldkit lets everyone everywhere monitor the world around them with low-cost, reliable sensors and easy-to-use tools for storing, sharing and telling stories with data."
    />
    <div id="scrollDown">
      <h3>Scroll to be notified when Fieldkit is ready</h3>
      <div id="arrow">
        <img src="./assets/downward-arrow.png" width="30px" height="30px" />
      </div>
    </div>

    <!------- 2nd IMG & PARA --------->
    <img
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_Panel 02_Final_sized.jpg"
    />
    <TextBlock
      msg="Easy-to-use environmental sensing."
      msg2="Fieldkit sensors are designed to be accurate, durable and extensible. Our mobile app makes configuration, testing and deployment easy for amateurs and professionals alike."
    />

    <!------- 3rd IMG & PARA --------->
    <img
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_Panel 03_Final_sized.jpg"
    />
    <TextBlock
      msg="For sensor projects, big and small."
      msg2="Fieldkit’s low per-unit cost makes deploying networks of several, dozens, even hundreds of sensors possible - no matter how small the budget."
    />

    <!------- 4th IMG & PARA --------->
    <img
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_Panel 04_Final_sized.jpg"
    />
    <TextBlock
      msg="Easily explore and share your data."
      msg2="The fieldkit platform securely stores and manages your data, and lets you share and tell stories with it."
    />

    <!------- 5th IMG & PARA --------->
    <img
      alt="Fieldkit is for everyone"
      src="./assets/Fieldkit_Panel 05_Final_sized.png"
    />
    <TextBlock
      msg="Fieldkit is for everyone."
      msg2="We’re building fieldkit because we believe everyone should be able to understand and advocate for the world they live in.

    Fieldkit is a tool for field scientists, environmental advocates, naturalists, students and teachers, and most importantly… it’s for you!
    "
    />

    <div id="contentEnd"></div>

    <!------- QUIZ --------->
    <img
      id="campers"
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_People_01.png"
    />
    <TextBlock
      msg="We have some questions. Will you help out?"
      msg2="We've been busy in the lab making first public versions of the Fieldkit sensors + software platform. We're trying to learn a bit more about how people might use Fieldkit in the real world. If you can help us to answer a few easy questions (it should only take three or four minutes), we'll give you a special discount when Fieldkit is released."
    />
    <RoleForm msg="What role best describes what you do?" />
    <!-- img
      id="user"
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_People_02.png"
    /-->
    <SensorForm msg="What types of sensors are most interesting to you?" />
    <!--img
      id="sensors"
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_Panel 01_Final_sensors.png"
    /-->
    <Chooser
      msg="As a prospective Fieldkit user, which of these features would be more important to you?"
      right="Low per-unit cost"
      left="Long battery life"
      v-on:choose="choose()"
      total="5"
    />
    <div id="quizEnd"></div>

    <!------- CONTACT --------->
    <img
      id="contact"
      alt="Fieldkit Easy Install"
      src="./assets/Fieldkit_People_03.png"
    />
    <Contact msg="Sign up to be notified when Fieldkit is ready" />
  </div>
</template>

<script>
//VUE IMPORTS
import TextBlock from "./components/TextBlock.vue";
import RoleForm from "./components/RoleForm.vue";
import SensorForm from "./components/SensorForm.vue";
import Chooser from "./components/Chooser.vue";
import Contact from "./components/Contact.vue";

//FEATURE LIST FOR RANDOM PAIRS
const features = [
  "Low per-unit cost",
  "Long battery life in the field",
  "Easy sharing of data",
  "Data visualization",
  "Integration with social media feeds",
  "Research-grade data",
  "Easy setup for non experts",
  "An active online community",
  "Integration with non-Fieldkit sensors"
];

var cloudX = 0;
var tas = [1.0, 1.0, 1.0];

setInterval(function() {
  document.getElementById("clouds").style.left = cloudX + "px";
  //console.log(Math.floor(cloudX) + "px");
  cloudX += 0.1;
}, 30);

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
    console.log(tas);
  }

  if (Math.random() < chance) {
    tas[1] = tas[1] == 1 ? 0 : 1;
  }

  if (Math.random() < chance) {
    tas[2] = tas[2] == 1 ? 0 : 1;
  }
}, 3);

function pickTwo() {
  var i1 = Math.floor(Math.random() * (features.length - 1));
  var i2 = i1 + Math.ceil(Math.random() * (features.length - 1 - i1));
  return [i1, i2];
}

export default {
  name: "app",
  components: {
    TextBlock,
    RoleForm,
    Chooser,
    Contact,
    SensorForm
  },
  methods: {
    choose: function() {
      var picks = pickTwo();
      this.$children[7].left = features[picks[0]];
      this.$children[7].right = features[picks[1]];
      this.$children[7].total--;
    }
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
  width: 25%;
  min-width: 220px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--fk-gray);
  margin-top: 0px;
  margin-left: 15%;
  margin-right: 15%;
}

img {
  max-width: 100%;
}

#imageStack {
  position: relative;
}

h1 {
  font-size: 2.5em;
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
  left: 0px;
  top: 0px;
}

#clouds {
  z-index: 1;
}

#scrollDown,
#contentEnd,
#quizEnd {
  padding-bottom: 15%;
  border-bottom: 1px solid #cccccc;
}

#contentDown,
#quizEnd {
  margin-bottom: 15%;
}

#arrow {
  padding-top: -10px;
}

#scrollDown h3 {
}

#campers {
  width: 70%;
}

#user {
  width: 50%;
}

#contact {
  width: 50%;
}

p {
  font-size: 1.5em;
  text-align: left;
}

input[type="text"],
select {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  width: 50%;
  min-width: 220px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  width: 50%;
  min-width: 220px;
  background-color: white;
  color: var(--fk-red);
  padding: 14px 20px;
  margin: 8px 0;
  border: 2px solid var(--fk-red);
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: white;
}
</style>
