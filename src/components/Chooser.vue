<template>
  <div id="choose">
    <h1>{{ msg }}</h1>
    <h3>(Please answer {{ total }} questions)</h3>
    <div id="leftChoose" v-on:click="$emit('choose')">{{ left }}</div>
    <div id="or">or</div>
    <div id="rightChoose" v-on:click="$emit('choose')">{{ right }}</div>
  </div>
</template>

<script>
export default {
  name: "Chooser",
  props: {
    msg: String,
    left: String,
    right: String,
    total: Number
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
#choose {
  margin-top: 100px;
  margin-bottom: 50px;
}

h3 {
  margin: 40px 0 0;
}
#leftChoose {
  font-size: 2.5em;
  font-weight: bold;
}
#rightChoose {
  font-size: 2.5em;
  font-weight: bold;
}
</style>
