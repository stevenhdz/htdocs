<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <ASIDE></ASIDE>
      </el-aside>
      <el-container>
        <el-header>
          <HEAD></HEAD>
        </el-header>
        <br />
        <br />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import ASIDE from "../src/components/aside.vue";
import HEAD from "../src/components/header.vue";
export default {
  components: {
    ASIDE,
    HEAD,
  },
};
</script>

<style lang="css">
.head {
  background-color: #365afc;
  color: white;
}
.aside {
  width: 200px;
}
</style>
