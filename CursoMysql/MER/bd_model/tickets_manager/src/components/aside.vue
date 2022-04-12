<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :router="true"
        >
          <el-button
            @click="isCollapse = false"
            style="
              float: center;
              background-color: #4351c3;
              color: white;
              width: 90%;
            "
            v-if="isCollapse == true"
          >
            <el-icon><Fold /></el-icon>
          </el-button>
          <div v-else>
            <img
              v-if="isCollapse == false"
              :src="logo"
              style="max-width: 20%; float: left; margin-top: -2%"
            />
            <el-button
              style="
                float: right;
                background-color: #4351c3;
                color: white;
                z-index: 9999999999;
                margin-top: 1%;
              "
            >
              <el-icon
                style="color: white; z-index: 9999999999"
                @click="isCollapse = true"
                ><DArrowLeft
              /></el-icon>
            </el-button>
          </div>
          <br />
          <br />
          <el-menu-item index="1" route="usuario">
            <el-icon><user /></el-icon>
            <template #title>Usuarios</template>
          </el-menu-item>
          <el-menu-item index="2" disabled>
            <el-icon><document /></el-icon>
            <span>About</span>
          </el-menu-item>
          <el-menu-item router="/about">
            <el-icon><document /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Fold,
  Document,
  User,
  Location,
  Setting,
  DArrowLeft,
} from "@element-plus/icons-vue";
export default {
  components: {
    Fold,
    Document,
    User,
    Location,
    Setting,
    DArrowLeft,
  },
  setup() {
    return {
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png",
      isCollapse: ref(true),
    };
  },
};
</script>

<style>
.el-menu-vertical-demo {
  width: 160px;
  min-height: 900px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d83d8;
}

#nav a {
  font-weight: bold;
  color: #3280ce;
}

#nav a.router-link-exact-active {
  color: #365afc;
}

#nav {
  padding: 10%;
}
.title {
  color: white;
}

.el-aside {
  --el-aside-width: 10% !important;
}
</style>
