<template>
  <div>
    <table id="customers">
      <td>
        <tr>
          <td>responsible</td>
          <td>id character</td>
          <td>name character</td>
          <td>date</td>
          <td>commit</td>
        </tr>
        <tr v-for="commit in players.result" :key="commit.idCharacter">
          <td>
            <p>
                <b>{{ commit.responsible }}</b>
            </p>
          </td>
          <td>
            <p>
              {{ commit.idCharacter }}
            </p>
          </td>
          <td>
            <p>
              {{ commit.nameCharacter }}
            </p>
          </td>
          <td>
            <p>
              {{ commit.date }}
            </p>
          </td>
          <td>
            <p>
              {{ commit.commit }}
            </p>
          </td>
        </tr>
      </td>
    </table>
  </div>
</template>

<script>
export default {
  name: "Commit",
  props: {
    idCharacter: String,
  },
  setup() {
    return {
      players: [],
    };
  },
  created() {
    let all = this;
    //en caso de no traer nada ejecutarla en el navegador para que autorice
    fetch("https://localhost:3001/api/commit/" + all.idCharacter)
      .then((response) => response.json())
      .then((data) => {
        all.players = data;
        all.$forceUpdate();
      });
  },
};
</script>

<style lang="css" scoped>
.td {
  text-align: center;
  float: none;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  float: right;
}

</style>
