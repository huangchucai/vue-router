<template>
  <div id="header" class="wrap">
    <div class="header">
      <h1 class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="" width="60px" height="50px">
        </router-link>
      </h1>
    </div>
    <div class="top-nav">
      <div id="navList" class="navlist-wrap">
        <div class="navlist clearfix">
          <span class="nav-btn">
            <router-link to="/">首页</router-link>
          </span>
          <span class="nav-btn">
            <router-link :to="{name:'Home'}">关于</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact">联系方式</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact/600">联系方式-600</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact/800">联系方式-800</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact/hello">联系子元素</router-link>
          </span>
          <span class="nav-btn">
            <router-link to="/contact/800/hello">带有id联系子元素</router-link>
          </span>
        </div>
      </div>
      <button @click="btnGo({path: '/about'})">跳转到about页面</button>
      <button @click="btnContact()">跳转到contact页面</button>
    </div>
  </div>
</template>

<script>
  export default({
    name:'header',
    data:function () {
      return {
        'nav-btn': 'nav-btn'
      }
    },
    methods: {
      btnGo(Objpath) {
        // 编程似跳转页面
        this.$router.push(Objpath)
      },
      btnContact() {
        this.$router.push({name: 'Contact',params: {id: 6000}})
      }
    }
  })
</script>

<style scoped>
  .header{width:1105px;margin:0 auto;height:111px;padding:12px 0 18px;position:relative;*z-index:1}
  .header .logo{height:86px;width:256px;margin-top:25px}
  .top-nav .navlist-wrap{width:1050px;margin:0 auto;position:relative}
  .top-nav .navlist{position:absolute;right:130PX;top:-40PX}
  .top-nav .navlist .nav-btn
  {
    float:left;
    margin-left:20px;
    color:#666;
    vertical-align: middle;
    text-decoration:none;
    font-size: large;
  }
</style>

