const sharedmenu = Vue.component('sharedmenu', {

        data() {
          return {
            activeIndex: '1',
          };
        },
        methods: {
            handleSelect(key, keyPath) {
              console.log(key, keyPath);
            }
          },
    template: `
        <div>
     
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/" tag="li" >volver inicio</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title">Workspace</template>

                <el-menu-item index="4"><router-link to="/listProducts" tag="a" >productos</router-link></el-menu-item>

                <el-menu-item index="4"><router-link to="/presupuestos" tag="a" >presupuestos</router-link></el-menu-item>
                
                <el-submenu index="2-4">
                <template slot="title">item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            
            </el-menu>
        </div>
    `
})     


