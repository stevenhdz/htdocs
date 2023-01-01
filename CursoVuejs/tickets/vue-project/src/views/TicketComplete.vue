<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRoute();

const route = useRouter();

const events = reactive({ value: [] });

const event = ref("");

const times = ref("");

const date = ref("");

const edit = ref(true);

const tableData = ref([
  {
    price: router.params.pay,
    count: router.params.count,
  },
]);

events.value = [
  {
    name: "Music metal",
    image:
      "https://www.autopistarock.com/images/easyblog_articles/5697/PosterKnotAf.jpeg",
  },
  {
    name: "Music rock",
    image:
      "https://www.autopistarock.com/images/easyblog_articles/3377/b2ap3_amp_AficheDiaDeRock.jpg",
  },
  {
    name: "Music salsa",
    image:
      "https://ilvalle.com.co/website/wp-content/uploads/2022/07/VIVA-LA-SALSA-2022.png",
  },
];

const name = router.params.event;

const find = () => {
  event.value = events.value.find((element) => element.name == name);
};

const time = () => {
  times.value = setInterval(() => {
    var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    var cd = new Date();
    times.value =
      zeroPadding(cd.getMinutes(), 2) + ":" + zeroPadding(cd.getSeconds(), 2);
    date.value =
      zeroPadding(cd.getFullYear(), 4) +
      "-" +
      zeroPadding(cd.getMonth() + 1, 2) +
      "-" +
      zeroPadding(cd.getDate(), 2) +
      " " +
      week[cd.getDay()];
  }, 1000);
};

setInterval(() => {
  alert("No pudo ser reservado, tardo mas de lo normal");
  edit.value = false;
  window.location.href = "http://127.0.0.1:5173/";
}, 300000);

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}

const to = () => {
    route.push("/pay");
};

time();

find();
</script>
<template>
  <div v-show="edit">
    <h1>{{ name }}</h1>

    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <img :src="event.image" alt="" />
        </el-aside>
        <el-main>
          Your selection
          <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column fixed prop="count" label="count" width="300" />
            <el-table-column fixed prop="price" label="price" width="300" />
          </el-table>
          <h3 class="time">Tiempo de reserva restante: {{ times }}</h3>
          <h1 class="pay">Total: {{ router.params.pay }}</h1>
          <div class="bt-d">
            <el-button v-on:click="to()" type="primary">Continue</el-button>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100%;
}

h1.pay {
  text-align: right;
}

h3.time {
  text-align: left;
  position: fixed;
}

.bt-d {
  padding-top: 10%;
  text-align: right;
}
</style>