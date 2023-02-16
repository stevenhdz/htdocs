<template>
  <!-- documentation in https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API-->
  <div class="container">
    <div
      class="drop-zone"
      @drop="onDrop($event, key)"
      @dragenter.prevent
      @dragover.prevent
      v-for="(container, key) in containers"
      :key="key"
    >
      <div
        v-for="(item, key) in getList(key)"
        :key="key"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <el-button
          v-show="item.type == 'bottom'"
          :id="item.id"
          type="primary"
          v-on:click.prevent="request(item.link)"
          >{{ item.title }}</el-button
        >

        <div v-show="item.type == 'image'" class="demo-image__preview">
          <el-image
            style="width: 100px; height: 100px"
            :src="item.link"
            :zoom-rate="1.2"
            :preview-src-list="item.links"
            :initial-index="4"
            fit="cover"
          />
        </div>

        <!--XSS attacks posible-->
        <div v-show="item.type == 'html'" v-html="item.title"></div>

        <span
          v-show="item.type == 'text'"
          :id="item.id"
          content-position="left"
          >{{ item.title }}</span
        >
        <Slider v-show="item.type == 'slider'" :uri="item.links" :key="key" />
      </div>
    </div>
    <button class="floating-button" v-on:click.prevent="visible = true">
      Config
    </button>

    <button
      v-show="id != ''"
      class="floating-button3"
      v-on:click.prevent="visible2 = true"
    >
      Edit
    </button>

    <button
      v-if="deletes"
      class="floating-button2"
      v-on:click.prevent="deleted()"
    >
      Delete
    </button>

    <el-dialog v-model="visible2" :show-close="false">
      <template #header="{ titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">
            Configure your leanding page
          </h4>
        </div>
      </template>

      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect2"
      >
        <el-menu-item index="0">Edit component: {{ id }}</el-menu-item>
      </el-menu>

      <br />

      <el-form v-show="option == 0" :model="component" label-width="100px">
        <el-form-item label="Content">
          <el-input
            :rows="2"
            type="textarea"
            style="width: 100%"
            v-model="title"
          />
        </el-form-item>
        <el-form-item label="Position">
          <el-input-number
            style="width: 100%"
            :min="1"
            :max="10"
            v-model="position"
          />
        </el-form-item>

        <el-form-item label="Type">
          <el-select
            style="width: 150px"
            v-model="type"
            placeholder="please select your zone"
          >
            <el-option label="button" value="bottom" />
            <el-option label="slider" value="slider" />
            <el-option label="text" value="text" />
            <el-option label="image" value="image" />
            <el-option label="html" value="html" />
          </el-select>
        </el-form-item>

        <el-form-item v-if="'bottom' == type" label="link">
          <el-input style="width: 100%" v-model="link" />
        </el-form-item>

        <el-form-item v-if="'image' == type || 'slider' == type" label="links">
          <el-input
            :rows="2"
            type="textarea"
            style="width: 100%"
            v-model="link"
          />
          <el-input
            :rows="2"
            type="textarea"
            style="width: 100%"
            v-model="links"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-on:click.prevent="edit()">Edit</el-button>
          <el-button type="danger" @click="visible2 = false"> Close </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">
            Configure your leanding page
          </h4>
        </div>
      </template>

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">Create component</el-menu-item>
      </el-menu>

      <br />

      <el-form v-show="option == 0" :model="component" label-width="100px">
        <el-form-item label="Content">
          <el-input
            :rows="2"
            type="textarea"
            style="width: 100%"
            v-model="component.title"
          />
        </el-form-item>
        <el-form-item label="Position">
          <el-input-number
            style="width: 100%"
            :min="1"
            :max="10"
            v-model="component.position"
          />
        </el-form-item>

        <el-form-item label="Type">
          <el-select
            style="width: 150px"
            v-model="component.type"
            placeholder="please select your zone"
          >
            <el-option label="button" value="bottom" />
            <el-option label="slider" value="slider" />
            <el-option label="text" value="text" />
            <el-option label="image" value="image" />
            <el-option label="html" value="html" />
          </el-select>
        </el-form-item>

        <el-form-item v-if="'bottom' == component.type" label="link">
          <el-input style="width: 100%" v-model="component.link" />
        </el-form-item>

        <el-form-item
          v-if="'image' == component.type || 'slider' == component.type"
          label="links"
        >
          <el-input
            :rows="2"
            type="textarea"
            style="width: 100%"
            v-model="component.link"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-on:click.prevent="create()"
            >Create</el-button
          >
          <el-button type="danger" @click="visible = false"> Close </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Slider from "@/components/Slider.vue";

const list = () => {
  const requestOptions = {
    rejectUnauthorized: false,
    method: "GET",
    redirect: "follow",
  };

  fetch("https://localhost:3001/api/commit/", requestOptions)
    .then((response) => response.json())
    .then((result) => (items.value = result.result[0].cms))
    .catch((error) => console.log("error", error));
};

list();

const items = ref([]);

const containers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

const component = ref({
  title: "",
  type: "",
  position: "",
});

const visible = ref(false);

const visible2 = ref(false);

const idm = ref(0);

const activeIndex = ref("0");

const activeIndex2 = ref("0");

const option = ref(0);

const hidden = ref(false);

const deletes = ref(false);

const id = ref(0);

const title = ref("");

const position = ref("");

const link = ref("");

const links = ref([]);

const type = ref("");

const handleSelect = (key) => {
  option.value = key;
  hidden.value = true;
};

const handleSelect2 = (key) => {
  option.value = key;
  hidden.value = true;
};

const getList = (list) => {
  return items.value.filter((item) => item.list == list);
};

const request = (link) => {
  window.open(link, "_blank");
};

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemID", item.id);
  id.value = item.id;
  title.value = item.title;
  position.value = item.list;
  type.value = item.type;
  link.value = item.link;
  links.value = item.links;
  deletes.value = true;
};

const onDrop = (event, list) => {
  const itemID = event.dataTransfer.getData("itemID");
  const item = items.value.find((item) => item.id == itemID);
  item.list = list;
};

const deleted = () => {
  hidden.value = false;

  const indexToRemove = items.value.findIndex(
    (obj) => obj.id === parseFloat(id.value)
  );

  if (indexToRemove !== -1) {
    items.value.splice(indexToRemove, 1);
  }

  deletes.value = false;
  id.value = "";
};

const edit = () => {
  items.value.forEach((element) => {
    if (element.id == id.value) {
      element.title = title.value;
      element.type = type.value;
      element.list = position.value;
      element.link = links.value;
      element.links = links.value;
    }
  });

  create();
};

const create = () => {
  if (typeof component.value.link != "undefined") {
    if (component.value.link.trim().includes(",")) {
      let link = component.value.link.trim().replace(/\n/g, "");

      link = link.split(",");

      if (component.value.type == "slider") {
        let link2 = [];

        link.forEach((element) => {
          link2.push({ uri: element });
        });
        items.value.push({
          id: Math.random(),
          type: component.value.type,
          title: component.value.title,
          list: component.value.position,
          link: "",
          links: link2,
        });
      } else {
        items.value.push({
          id: Math.random(),
          type: component.value.type,
          title: component.value.title,
          list: component.value.position,
          link: link[0],
          links: link,
        });
      }
    } else {
      items.value.push({
        id: Math.random(),
        type: component.value.type,
        title: component.value.title,
        list: component.value.position,
        link: component.value.link,
        links: component.value.links,
      });
    }
  } else {
    items.value.push({
      id: Math.random(),
      type: component.value.type,
      title: component.value.title,
      list: component.value.position,
      link: "",
      links: "",
    });
  }

  var requestOptions3 = {
    rejectUnauthorized: false,
    method: "GET",
    redirect: "follow",
  };

  fetch("https://localhost:3001/api/commit/1", requestOptions3)
    .then((response) => response.json())
    .then((result) => {
      if (result.result.length > 0) {
        idm.value = result.result[0]._id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          id: "1",
          cms: items.value,
        });

        var requestOptions = {
          rejectUnauthorized: false,
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("https://localhost:3001/api/commit/" + idm.value, requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      } else {
        var myHeaders1 = new Headers();
        myHeaders1.append("Content-Type", "application/json");

        var raw1 = JSON.stringify({
          id: "1",
          cms: items.value,
        });

        var requestOptions1 = {
          rejectUnauthorized: false,
          method: "POST",
          headers: myHeaders,
          body: raw1,
          redirect: "follow",
        };

        fetch("https://localhost:3001/api/commit/", requestOptions1)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      }
    })
    .catch((error) => console.log("error", error));

  visible.value = false;
  component.value = {};
};
</script>
