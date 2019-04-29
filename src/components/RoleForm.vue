<template>
  <div id="roleChoose">
    <h1>{{ msg }}</h1>
    <h3>(You can choose more than one!)</h3>
    <div id="chooseList">
      <div class="choice">
        <input
          type="checkbox"
          id="fieldScience"
          value="Field Scientist"
          v-model="checkedNames"
        />
        <label for="fieldScience">Field Scientist</label>
      </div>

      <div class="choice">
        <input
          type="checkbox"
          id="citScience"
          value="Citizen Scientist"
          v-model="checkedNames"
        />
        <label for="citScience">Citizen Scientist</label>
      </div>

      <div class="choice">
        <input
          type="checkbox"
          id="sciComm"
          value="Science Comminicator"
          v-model="checkedNames"
        />
        <label for="sciComm">Science Communicator</label>
      </div>

      <div class="choice">
        <input
          type="checkbox"
          id="naturalist"
          value="Naturalist"
          v-model="checkedNames"
        />
        <label for="fieldScience">Naturalist</label>
      </div>

      <div class="choice">
        <input
          type="checkbox"
          id="enviroAdvocate"
          value="Environmental Advocate"
          v-model="checkedNames"
        />
        <label for="citScience">Environmental Advocate</label>
      </div>

      <div class="choice">
        <input
          type="checkbox"
          id="engineer"
          value="Engineer"
          v-model="checkedNames"
        />
        <label for="sciComm">Engineer</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleForm",
  props: {
    msg: String
  },
  data: function() {
    return {
      checkedNames: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#roleChoose {
  margin-top: 100px;
}

#chooseList {
  width: 350px;
  padding-top: 25px;
  margin-left: 30%;
}

p {
  text-align: center;
}

.choice {
  display: block;
  text-align: left;
}

label {
  font-size: 18pt;
  padding-left: 10px;
  text-align: right;
  padding-right: 15px;
  width: 270px;
}

input[type="checkbox"] {
  width: 30px; /*Desired width*/
  height: 30px; /*Desired height*/
  cursor: pointer;
  zoom: 1.1;
}
</style>
