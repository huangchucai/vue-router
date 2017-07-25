<template>
  <div id="contact">
    {{useId}}
    <h2>this is contact</h2>
    <!--设置子路由配置-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name:'contact',
    data() {
      return {

      }
    },
    computed: {
      useId() {
        if(this.$route.params.id){
          return `用户id:${this.$route.params.id}`
        }else 
        return `No Id`
      }
    },
    watch: {
      '$route'(to,from) {
        console.log(to)
        console.log(from)
      }
    }
  }
</script>

<style scoped>
  #contact{
    width: 100%;
    height: 500px;
    background-color: lightskyblue;
  }
</style>
