<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();

const events = reactive({ value: [] });

const event = ref("");

const countEvent = ref(0);

const total = ref(0);

const to = (event) => {
  router.push(
    "/shop/complete/" + event + "/" + total.value + "/" + countEvent.value
  );
};

const deletes = (event) => {
  tableData.value[event]["count"] = tableData.value[event]["count"] - 1;
  countEvents();
  totalEvents();
};

const add = (event) => {
  tableData.value[event]["count"] = tableData.value[event]["count"] + 1;
  countEvents();
  totalEvents();
};

const countEvents = () => {
  countEvent.value = tableData.value.reduce(
    (partialSum, a) => partialSum + a.count,
    0
  );
};

//falta
const totalEvents = () => {
  tableData.value.forEach((number) => {
    total.value = number.price * number.count;
  });
};

const tableData = ref([
  {
    names: "Music metal junior",
    price: 30000,
    count: 0,
  },
  {
    names: "Music metal middle",
    price: 70000,
    count: 0,
  },
  {
    names: "Music metal senior",
    price: 120000,
    count: 0,
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

const name = route.params.event;

const find = () => {
  event.value = events.value.find((element) => element.name == name);
};

find();
</script>
<template>
  <div>
    <h1>{{ name }}</h1>

    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <img :src="event.image" alt="" />
          <p class="center">Cantidad de tickets: {{ countEvent }}</p>
          <p class="center">Total: {{ total }}</p>
          <div class="bt-d">
            <el-button v-on:click="to(name)" type="primary"
              >Find tickets</el-button
            >
          </div>
        </el-aside>
        <el-main>
          <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column fixed prop="names" label="names" width="300" />
            <el-table-column fixed prop="price" label="price" width="300" />
            <el-table-column fixed="right" label="reserve quantity" width="400">
              <template #default="scope">
                <el-button
                  :icon="Search"
                  @click.prevent="deletes(scope.$index)"
                  circle
                  >-</el-button
                >

                {{ scope.row.count }}

                <el-button
                  type="primary"
                  @click.prevent="add(scope.$index)"
                  :icon="Edit"
                  circle
                  >+</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100%;
}

.center {
  text-align: center !important;
  padding-top: 1%;
  padding-bottom: 10%;
}

.bt-d {
  text-align: center;
}
</style>