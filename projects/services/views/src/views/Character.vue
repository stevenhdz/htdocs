<template>
  <div class="complete">
    <header>
      <ul>
        <li><router-link to="/characters">Characters</router-link></li>
      </ul>
    </header>

    <article>
      <table>
        <td>
          <tr>
            <td>
              <h3>Episodes {{ player.name }}</h3>
            </td>
          </tr>
          <tr v-for="commit in player.episode" :key="commit.id">
            <td>
              <p>
                <b>{{ commit }}</b>
              </p>
            </td>
          </tr>
        </td>
      </table>
    </article>

    <aside>
      <Commit :idCharacter="player.id"></Commit>

      <div class="photo">
        <img class="image" :src="player.image" alt="" />
      </div>

      <div class="pie">
        <h3 class="letter">{{ player.name }}</h3>
        <p class="letter">status: {{ player.status }}</p>
        <p class="letter">specie: {{ player.species }}</p>
        <p class="letter">gender: {{ player.gender }}</p>
        <p class="letter">location: {{ player.location.name }}</p>
        <p class="letter">origin: {{ player.origin.name }}</p>
        <p class="letter"><span class="badge">3</span></p>
      </div>

      <div class="commit">
        <p>Send Form</p>
        <input
          type="textarea"
          v-model="responsible"
          placeholder="your name"
          name="responsible"
          id="responsible"
        />
        <input
          type="textarea"
          v-model="commit"
          placeholder="commit"
          name="commit"
          id="commit"
        />
        <button @click="save(player.id, player.name)">Enviar</button>
      </div>
    </aside>
  </div>
</template>

<script>
import Commit from "../components/Commit";
export default {
  setup() {
    return {
      player: [],
      commit: "",
      responsible: "",
    };
  },
  components: {
    Commit,
  },
  created() {
    let all = this;

    fetch("https://rickandmortyapi.com/api/character/" + all.$route.params.id)
      .then((response) => response.json())
      .then((data) => {
        all.player = data;
        all.$forceUpdate();
      });
  },
  methods: {
    save(id, name) {
      let all = this;

      if (all.responsible != "" && all.commit != "") {
        let data = {
          responsible: all.responsible,
          commit: all.commit,
          idCharacter: id.toString(),
          nameCharacter: name,
        };

        fetch("https://localhost:3001/api/commit/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            location.reload(true);
          });
      } else {
        alert("fields emptys");
      }
    },
  },
};
</script>

<style lang="css" scoped>
aside {
  width: 70%;
  top: 7%;
  position: absolute;
  padding-left: 10px;
  margin-left: 10px;
  float: right;
  right: 0;
}
.card {
  width: 30%;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.complete {
  float: center !important;
  padding: 60px;
}

input[type="text"],
select {
  padding: 6px 17px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: rgb(65, 127, 250);
  color: white;
  padding: 6px 17px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  color: white;
}

li {
  float: left;
}
li.btn {
  float: right;
  padding: 3px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}

header {
  z-index: 9999999;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: white;
}

input[type="textarea"] {
  padding: 6px 17px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: rgb(65, 127, 250);
  color: white;
  padding: 6px 17px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.td {
  text-align: center;
  float: right;
  color: white;
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

.photo {
  display: grid;
  float: left;
}

.pie {
  display: grid;
}

.commit {
  float: center;
  width: 100%;
  padding-top: 1%;
  background-color: #ddd;
  color: black;
}
</style>
