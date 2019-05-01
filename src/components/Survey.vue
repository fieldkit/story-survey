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
        <h2>What role best describes what you do?</h2>
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
        <h2>What types of sensors are most interesting to you?</h2>
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
        <h2 class="smaller">Which of these features would be more important to you?</h2>
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
          </div>
        </div>
        <button @click.prevent="choose()" class="next-btn under">Next</button>
      </div>

      <!-- Thank you -->
      <div class="bottom-space" v-if="step === 4">
        <h1>Thank you for taking our survey!</h1>
        <p>Your comments are important to us. If you have any more ideas or comments, please email <a href="mailto:everyone@fieldkit.org">everyone@fieldkit.org</a></p>

        <br/><br/>Role response: {{ role.checkedNames }}
        <br/><br/>Sensors response: {{ sensor.checkedNames }}
        <br/><br/>Priorities response: {{ priorities.checkedNames }}

      </div>
    </form>

    <div id="signup">
      <h1>Sign up to be notified when FieldKit is ready!</h1>
      <input type="textbox" id="email" name="email" placeholder="Add your email">
      <input type="submit" id="subscribe" name="subscribe" value="Subscribe">
    </div>

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
          selection: "none,none",
          checkedNames: [],
          done: 0
        }
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

        // remove the new choices
        features.splice(picks[0],1)
        var secondIndex = features.indexOf(this.priorities.right);
        features.splice(secondIndex,1);

        document.getElementById("leftPriority").checked = false
        document.getElementById("rightPriority").checked = false

        this.priorities.done++;
        if(this.priorities.done > 3) {
          this.step++;
          // alert('Submit to data storage');
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app.mobile h2 {
  font-size: 1.4em;
  line-height: 1.2em;
  margin: 0.5em 0;
}
#app.mobile h2.smaller {
  font-size: 1.3em;
}

#survey-form {
  margin-top: 10%;
}
#survey-form p {
  max-width: 400px;
  margin: auto;
}

.choice {
  width: 250px;
}
.priority {
  width: 310px;
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
  margin-top: -1.5%;
  margin-bottom: 4%;
  font-size: 1.2em;
}
#app.mobile .instruction {
  font-size: 1em;
}

.choice label {
  font-size: 1em;
  font-weight: lighter;
  width: 210px;
  float: right;
  padding-top: 8px;
}

.priority label {
  float: left;
  margin-top: 0.5em;
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
  background: #cc6575;
  color: #FFF;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  margin: 40px auto;
  cursor: pointer;
}
.next-btn.under {
  display: block;
  clear: both;
}

#app.mobile .question-number {
  font-size: 0.9em;
  font-weight: lighter;
}

.bottom-space {
  margin-bottom: 15%;
}

#survey-form a {
  color: inherit;
  font-style: normal;
  font-weight: bold;
  font-size: 1.15em;
}

#signup {
  margin-top: 5%;
  border-top: 1px solid #cccccc;
  padding-top: 3%;
}
#signup h1 {
  padding: 0 1em;
}
#email {
  min-width: 288px;
  padding: 12px 0 12px 12px;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-right: 3%;
}
#subscribe {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.25em;
  font-weight: bold;
  max-width: 300px;
  background-color: white;
  color: var(--fk-red);
  padding: 5px 50px;
  margin: 1% 0 5% 0;
  border: 1px solid var(--fk-red);
  border-radius: 4px;
  cursor: pointer;
}
#app.mobile #email {
  min-width: 260px;
  margin: 1em 0;
}
#app.mobile #subscribe {
  width: 275px;
}

</style>
