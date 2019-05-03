<template>
  <div id="survey">

    <div id="survey-prompt" v-if="step === 1">
      <div class="hint">Take survey</div>
      <div class="arrow">
        <img src="../assets/downward-arrow.png" width="30px" height="30px" />
      </div>
    </div>

    <form id="survey-form">
      <!-- Roles first -->
      <div v-if="step === 1">
        <div class="question-number">Question 1 of 6</div>
        <h1>What role best describes what you do?</h1>
        <div class="instruction">(You can choose more than one!)</div>
        <div class="choice">
          <input
            type="checkbox"
            id="fieldScience"
            value="Field Scientist"
            v-model="role.checkedNames"
          />
          <label for="fieldScience">Field Scientist</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="citScience"
            value="Citizen Scientist"
            v-model="role.checkedNames"
          />
          <label for="citScience">Citizen Scientist</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="educator"
            value="Educator"
            v-model="role.checkedNames"
          />
          <label for="educator">Educator</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="sciComm"
            value="Science Communicator"
            v-model="role.checkedNames"
          />
          <label for="sciComm">Science Communicator</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="naturalist"
            value="Naturalist"
            v-model="role.checkedNames"
          />
          <label for="naturalist">Naturalist</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="enviroAdvocate"
            value="Environmental Advocate"
            v-model="role.checkedNames"
          />
          <label for="enviroAdvocate">Environmental Advocate</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="engineer"
            value="Engineer"
            v-model="role.checkedNames"
          />
          <label for="engineer">Engineer</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="roleOther"
            value="Other"
            v-model="role.checkedNames"
          />
          <label for="roleOther">Other</label>
        </div>
        <button @click.prevent="next()" class="next-btn">Next</button>
      </div>


      <!-- Then sensors -->
      <div v-if="step === 2">
        <div class="question-number">Question 2 of 6</div>
        <h1>What types of sensors are most interesting to you?</h1>
        <div class="instruction">(You can choose more than one!)</div>
        <div class="choice">
          <input
            type="checkbox"
            id="waterQual"
            value="Water quality"
            v-model="sensor.checkedNames"
          />
          <label for="waterQual">Water quality</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="waterLevelFlow"
            value="Water level & flow rate"
            v-model="sensor.checkedNames"
          />
          <label for="waterLevelFlow">Water level & flow rate</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="weather"
            value="Weather"
            v-model="sensor.checkedNames"
          />
          <label for="weather">Weather</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="airQual"
            value="Air quality"
            v-model="sensor.checkedNames"
          />
          <label for="airQual">Air quality</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="acoustic"
            value="Acoustic"
            v-model="sensor.checkedNames"
          />
          <label for="acoustic">Acoustic</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="cameraTrap"
            value="Camera traps"
            v-model="sensor.checkedNames"
          />
          <label for="cameraTrap">Camera traps</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="soilHum"
            value="Soil humidity"
            v-model="sensor.checkedNames"
          />
          <label for="soilHum">Soil humidity</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="seismic"
            value="Seismic"
            v-model="sensor.checkedNames"
          />
          <label for="seismic">Seismic</label>
        </div>

        <div class="choice">
          <input
            type="checkbox"
            id="sensorOther"
            value="Other"
            v-model="sensor.checkedNames"
          />
          <label for="sensorOther">Other</label>
        </div>

        <button @click.prevent="next()" class="next-btn">Next</button>
      </div>


      <!-- And then priorities -->
      <div class="bottom-space" v-if="step === 3">
        <div class="question-number">Question {{ 3 + priorities.done }} of 6</div>
        <h1 class="smaller">Which of these features would be more important to you?</h1>
        <div class="instruction">(Choose one)</div>

        <div id="priorities-wrapper">
          <div class="priority">
            <input
              type="radio"
              id="leftPriority"
              value="left,right"
              name="featurePriority"
              v-model="priorities.selection"
            />
            <label for="leftPriority">{{ priorities.left }}</label>

            <div v-if="$mq === 'desktop'">
              <div v-popover:leftInfo.top class="info-prompt">i</div>
            </div>
            <div v-if="$mq === 'mobile'">
              <div v-popover:leftInfo.left class="info-prompt">i</div>
            </div>
          </div>
          <div class="priority">
            <input
              type="radio"
              id="rightPriority"
              value="right,left"
              name="featurePriority"
              v-model="priorities.selection"
            />
            <label for="rightPriority">{{ priorities.right }}</label>

            <div v-if="$mq === 'desktop'">
              <div v-popover:rightInfo.bottom class="info-prompt">i</div>
            </div>
            <div v-if="$mq === 'mobile'">
              <div v-popover:rightInfo.left class="info-prompt">i</div>
            </div>
          </div>
        </div>
        <button @click.prevent="choose()" class="next-btn under">Next</button>
      </div>

      <!-- Thank you -->
      <div class="bottom-space" v-if="step === 4">
        <h1>Thank you for taking our survey!</h1>
        <p>Your comments are important to us. If you have any more ideas or comments, please email <a href="mailto:everyone@fieldkit.org">everyone@fieldkit.org</a></p>
        <p class="top-space">Provide your email below and we'll send you a discount code when FieldKit is ready to go.</p>
      </div>
    </form>

    <div id="signup">
      <h1>Sign up to be notified when FieldKit is ready!</h1>
      <input type="textbox" v-model="email" id="email" name="email" placeholder="Add your email">
      <input type="submit" v-on:click="saveEmail()" id="subscribe" name="subscribe" value="Subscribe">
      <div id="email-submitted">You're on our list!</div>
    </div>

    <popover name="leftInfo" id="leftInfo" class="info-text">{{ priorities.leftInfo }}</popover>
    <popover name="rightInfo" id="rightInfo" class="info-text">{{ priorities.rightInfo }}</popover>

  </div>
</template>

<script>
  const features = [
    "Low per-unit cost",
    "Long battery life in the field",
    "Easy sharing of data",
    "Data visualization",
    "Integration with social media feeds",
    "Research-grade data",
    "Easy setup for non experts",
    "An active online community",
    "Integration with non-FieldKit sensors"
  ];
  const featuresInfo = {
    "Low per-unit cost": "Full sensor configurations in the $150-750 range, depending on what you're measuring.",
    "Long battery life in the field": "Solar charging functionality and low power consumption, allowing for months or years in the field.",
    "Easy sharing of data": "Multiple export options and integration with common open data tools.",
    "Data visualization": "Easy to read data graphics and charts.",
    "Integration with social media feeds": "Ability to share data points and ranges through social media.",
    "Research-grade data": "Accuracy and precision that is comparable to commercially available sensors being deployed for scientific research.",
    "Easy setup for non experts": "Quick on-boarding for new users to allow for fast deployments.",
    "An active online community": "Strong FieldKit user community and developers working on a new sensor design.",
    "Integration with non-FieldKit sensors": "Ability to integrate currently available commercial environmental sensors with FieldKit sensors and data platform.",
  };
  const axiosConfig = {
    header: { "Content-Type": "application/x-www-form-urlencoded" }
  };

  function storeSurvey(survey) {
    var form = {
      "form-name": "netlify-survey",
      "roles": survey.role.checkedNames.join(","),
      "sensors": survey.sensor.checkedNames.join(","),
      "features": survey.priorities.checkedNames.join(","),
    }

    var encodedForm = Object.keys(form)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(form[key])}`
      )
      .join("&");

    survey.axios.post(
      "/",
      encodedForm,
      axiosConfig
    );
    // re-display, in case they already subscribed before doing the survey
    document.getElementById("email").style.display = "inline-block";
    document.getElementById("subscribe").style.display = "inline-block";
    document.getElementById("email-submitted").style.display = "none";
  }

  function pickTwo() {
    var i1 = Math.floor(Math.random() * (features.length - 1));
    var i2 = i1 + Math.ceil(Math.random() * (features.length - 1 - i1));
    return [i1, i2];
  }

  var firstTwo = pickTwo();

  export default {
    name: "SurveyForm",
    props: {
      msg: String,
    },
    data: function() {
      return {
        step: 1,
        role: {
          checkedNames: [],
        },
        sensor: {
          checkedNames: [],
        },
        priorities: {
          left: features[firstTwo[0]],
          right: features[firstTwo[1]],
          leftInfo: featuresInfo[features[firstTwo[0]]],
          rightInfo: featuresInfo[features[firstTwo[1]]],
          selection: "none,none",
          checkedNames: [],
          done: 0
        },
        email: "",
        surveyComplete: 0
      };
    },
    methods:{
      prev() {
        this.step--;
      },
      next() {
        this.step++;
      },
      choose: function() {
        if(this.priorities.done === 0) {
          // remove first two choices
          // Get the value of the second option before
          // changing length of features array
          var second = features[firstTwo[1]];
          features.splice(firstTwo[0],1);
          var index = features.indexOf(second);
          features.splice(index,1);
        }

        // check to see if they selected anything
        if(document.querySelector('input[name="featurePriority"]:checked')) {
          var selection = this.priorities.selection.split(",");
          var firstChoice = this.priorities[selection[0]];
          var secondChoice = this.priorities[selection[1]];
          this.priorities.checkedNames.push(firstChoice+">"+secondChoice);
        }
        // else: could store a "skipped" notice, if desired

        // display new choices
        var picks = pickTwo();
        this.priorities.left = features[picks[0]];
        this.priorities.right = features[picks[1]];
        this.priorities.leftInfo = featuresInfo[features[picks[0]]];
        this.priorities.rightInfo = featuresInfo[features[picks[1]]];

        // remove the new choices
        features.splice(picks[0],1)
        var secondIndex = features.indexOf(this.priorities.right);
        features.splice(secondIndex,1);

        document.getElementById("leftPriority").checked = false
        document.getElementById("rightPriority").checked = false

        this.priorities.done++;
        if(this.priorities.done > 3) {
          this.surveyComplete = 1;
          storeSurvey(this);
          this.step++;
        }
      },
      saveEmail: function() {
        var form = {
          "form-name": "netlify-email",
          "email": this.email,
          "surveyComplete": this.surveyComplete
        }

        var encodedForm = Object.keys(form)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(form[key])}`
          )
          .join("&");

        this.axios.post(
          "/",
          encodedForm,
          axiosConfig
        );
        document.getElementById("email").style.display = "none";
        document.getElementById("subscribe").style.display = "none";
        document.getElementById("email-submitted").style.display = "block";

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app.mobile #survey {
  max-width: 300px;
  margin: auto;
}
#app.mobile h1.smaller {
  font-size: 21px;
}

#survey-form {
  margin-top: 40px;
}
#survey-form p {
  max-width: 600px;
  margin: auto;
}

.choice {
  width: 245px;
}
.priority {
  width: 330px;
}
#app.mobile .priority {
  width: 275px;
}
#priorities-wrapper {
  display: inline-block;
}
.choice, .priority {
  margin: auto;
  display: block;
  text-align: left;
}

.instruction {
  margin-top: -10px;
  margin-bottom: 16px;
}

.choice label {
  font-size: 16px;
  font-weight: lighter;
  width: 200px;
  float: right;
  margin-top: 8px;
}

.priority label {
  font-size: 16px;
  float: left;
  margin-top: 8px;
}
#app.mobile .priority label {
  max-width: 210px;
  min-width: 130px;
}

input[type="checkbox"] {
  width: 30px; /*Desired width*/
  height: 30px; /*Desired height*/
  cursor: pointer;
  zoom: 1.1;
}

input[type="radio"] {
  float: left;
  clear: both;
  width: 30px; /*Desired width*/
  height: 30px; /*Desired height*/
  cursor: pointer;
  zoom: 1.1;
}

.next-btn {
  width: 300px;
  height: 45px;
  background: var(--fk-red);
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  margin: 40px auto;
  cursor: pointer;
}
.next-btn.under {
  display: block;
  clear: both;
}

.info-prompt {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #A8AAB7;
  color: #FFF;
  float: left;
  text-align: center;
  line-height: 18px;
  font-weight: bold;
  margin: 8px 0 0 8px;
  cursor: pointer;
}

.info-text {
  text-align: left;
  border: 1px solid #D8DCE0;
  line-height: 20px;
  color: #2C3E50;
  background: #F9FAFC;
  box-shadow: 0px 2px 8px 0px rgba(207,206,206,0.5);
}

#survey-form p.top-space {
  margin-top: 16px;
}
.bottom-space {
  margin-bottom: 40px;
}

#survey-form a {
  color: inherit;
  font-style: normal;
  font-weight: bold;
}

#signup {
  margin-top: 20px;
  border-top: 1px solid #CCCDCF;
  padding-top: 16px;
}
#email {
  font-size: 13px;
  min-width: 288px;
  height: 45px;
  padding: 0 9px;
  border-radius: 4px;
  border: 1px solid #D8DCE0;
  margin-right: 16px;
}
#subscribe {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  max-width: 300px;
  height: 45px;
  background-color: white;
  color: var(--fk-red);
  padding: 0 50px;
  margin: 4px 0 16px 0;
  border: 1px solid var(--fk-red);
  border-radius: 4px;
  cursor: pointer;
}
#app.mobile #email {
  min-width: 260px;
  height: 45px;
  margin: 10px 0;
}
#app.mobile #subscribe {
  width: 275px;
  height: 45px;
}
#email-submitted {
  display: none;
}

</style>
