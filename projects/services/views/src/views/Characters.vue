<template>
  <div>
    <div class="complete">
    <header>
      <ul>
        <li class="btn"><button @click="filter()">Search</button></li>
        <li class="btn">
          <input v-model="names" placeholder="name of character" type="text" />
        </li>
        <li class="btn">
          <select @change="order($event)" name="order" id="order-select">
            <option value="">Please choose an order</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </li>

        <li><router-link to="/characters">Characters</router-link></li>
      </ul>
    </header>
    <div
      class="gallery"
      @click="$router.push('character/' + player.id)"
      v-for="player in players.results"
      :key="player.id"
    >
      <div class="photo">
        <img class="image" :src="player.image" alt="" />
      </div>
      <div class="pie">
        <h3 class="letter">{{ player.name }}</h3>
        <p class="letter">status: {{ player.status }}</p>
        <p class="letter">specie: {{ player.species }}</p>
        <p class="letter">gender: {{ player.gender }}</p>
        <p class="letter">location: {{ player.location.name }}</p>
        <Notify :idCharacter="player.id"></Notify>
      </div>
    </div>
    <footer>
      <button @click="previous()">{{ prev }}</button>
      <button @click="next()">{{ nex }}</button>
      <!--h6>StevenAlexanderHernandezJimenez © 2022</h6-->
    </footer>
  </div>
  </div>
</template>

<script>
import Notify from '../components/Notify.vue'

export default {
  name: "Characters",
  components: {
    Notify
  },
  setup() {
    return {
      names: "",
      count: 0,
      countCommit: 0,
      page: 1,
      prev: "<< previous",
      nex: "next >>",
      players: [],
    };
  },
  mounted() {},
  created() {
    let all = this;
    all.list(all.page);
  },
  methods: {
    filter() {
      let all = this;
      if (all.names != "") {
        let result = all.players.results.filter((word) =>
          word.name.toLowerCase().includes(all.names.toLowerCase())
        );
        all.players.results = result;
        all.$forceUpdate();
      }
    },
    list(page) {
      let all = this;

      console.log(page);

      fetch("https://rickandmortyapi.com/api/character/?page=" + page)
        .then((response) => response.json())
        .then((data) => {
          all.players = data;
          all.count = data.info.count;
          all.$forceUpdate();
        });
    },
   
    previous() {
      let all = this;

      if (all.page > 1) {
        all.list((all.page = all.page - 1));
      }
    },
    next() {
      let all = this;

      if (all.page <= all.players.info.pages) {
        all.list((all.page = all.page + 1));
      }
    },
    order(event) {
      let all = this;

      if (event.target.value == "asc") {
        let order = all.players.results.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        all.players.results = order;
        all.$forceUpdate();
      } else {
        let order = all.players.results.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        all.players.results = order;
        all.$forceUpdate();
      }
    },
  },
};
</script>

<style lang="css" scoped>
header {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: white;
}

footer {
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: white;
}
div.gallery {
  margin: 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(17, 255, 0, 0.2),
    0 6px 20px 0 rgba(0, 249, 17, 0.19);
  width: 20%;
  float: left;
  background-color: black;
}

div.gallery img {
  width: 100%;
  height: 100%;
}
.nav {
  background-color: yellowgreen;
}

.badge {
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}

div.gallery:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 254, 161, 0.2),
    0 6px 20px 0 rgba(3, 255, 158, 0.19);
  transform: rotate(-3deg);
  background-color: transparent;
  outline: 2px dashed;
  background-color: rgb(244, 70, 70);
}

div.pie {
  text-align: center;
  background-image: linear-gradient(rgb(133, 235, 133), rgb(239, 239, 96));
  text-shadow: 2px 2px 10px rgb(0, 255, 208);
  padding: 1vh;
}

p.letter {
  padding: 1px;
  font-size: 14px;
}

.paginate {
  padding: 1%;
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

li.btn {
  float: right;
  padding: 3px;
}

.complete {
  float: center !important;
  padding: 60px;
}
</style>
