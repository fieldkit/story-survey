<template>
  <div class="text-block">
    <h1>{{ msg }}</h1>
    <p>{{ msg2 }}</p>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    msg: String,
    msg2: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text-block {
  text-align: center;
  font-weight: lighter;
  margin-bottom: 2em;
}
</style>
