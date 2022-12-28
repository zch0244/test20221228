<template>
  <div id="home">
    <!-- <h2>首页</h2> -->
    <div class="menu">
      <h2>左侧菜单区域</h2>
      <Menu :menuList="menuList" />
    </div>
    <div class="content">
      <div class="nav">顶部导航</div>
      <el-button @click="toLogin">回登陆页</el-button>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Menu from "@/components/menu.vue"
export default {
  name: "home",
  data() {
    return {
      menuList:[
        {
          name:""
        }
      ]

    }
  },
  components:{
    Menu
  },
  methods: {
    toLogin() {
      this.$router.push('/login')
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from)
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
  },
  beforeRouteUpdate(to, from) {
    console.log(to, from)
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from)
    if(to.path == "/login"){
      console.log("去往登陆页面")
      
    }
    next()
    
  },


}
</script>

<style scoped lang="less">
#home {
  width: 100%;
  height: 100%;
  display: flex;

  h2 {
    color: red;
  }

  .menu {
    // display: inline-block;
    width: 200px;
    height: 100%;
    // background-color: red;
  }

  .content {
    // display: inline-block;
    width: 100%;
    height: 100%;

    // background-color: orchid;
    .nav {
      height: 50px;
      background-color: gray;
      opacity: .4;
      line-height: 50px;
      padding: 0 10px;
    }


  }
}
</style>