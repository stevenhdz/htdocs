<template>
  <div class="complete">
    <header>
      <ul>
      

        <li><router-link to="/characters">Characters</router-link></li>
      </ul>
    </header>
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

      <div>

    <Commit></Commit>
      </div>
      <table id="customers">
        <td>
          <tr>
            <td>Episode relation to character</td>
          </tr>
          <tr v-for="character in player.episode" :key="character.id">
            <p>
              {{
                character.replace(
                  "https://rickandmortyapi.com/api/episode/",
                  ""
                )
              }}
            </p>
            <div class="commit">
              <input type="textarea" placeholder="commit" name="" id="" />
              <button>Enviar</button>
            </div>
          </tr>
        </td>
      </table>
    </div>
  </div>
</template>

<script>
import Commit from '../components/Commit';
export default {
  setup() {
    return {
      player: [],
    };
  },
  components:{
    Commit
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
  methods: {},
};
</script>

<style lang="css" scoped>

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

.photo {
  display: grid;
  float: left;
}

.pie {
  display: grid;
}

.commit {
  float: left;
  z-index: 99;
}
</style>
