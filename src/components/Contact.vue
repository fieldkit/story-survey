<template>
  <div id="choose">
    <h1>{{ msg }}</h1>
    <form>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Add your e-mail"
      />
      <br />
      <input type="submit" value="Subscribe" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    msg: String,
    left: String,
    right: String
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
  font-size: 1.5em;
  font-weight: bold;
}
#rightChoose {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
