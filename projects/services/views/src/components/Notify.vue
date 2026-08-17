<template>
  <div>
    <p class="letter">
      <span class="badge">{{ countCommit }}</span>
    </p>
  </div>
</template>
  
  <script>
export default {
  name: "Notify",
  props: {
    idCharacter: String,
  },
  setup() {
    return {
      countCommit: 0,
    };
  },
  created() {
    let all = this;
    //en caso de no traer nada ejecutarla en el navegador para que autorice
    fetch("https://localhost:3001/api/commit/" + all.idCharacter)
      .then((response) => response.json())
      .then((data) => {
        all.countCommit = data.result.length;
        all.$forceUpdate();
      });
  },
};
</script>
  
  <style lang="css" scoped>
.badge {
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}
p.letter {
  padding: 1px;
  font-size: 14px;
}
</style>
  