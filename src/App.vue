<template>
  <div id="app">
    <Demo-header></Demo-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Demo-footer></Demo-footer>
  </div>
</template>

<script>
import DemoHeader from '@/components/DemoHeader.vue'
import DemoFooter from '@/components/DemoFooter.vue'
export default {
  name: 'app',
  components: {
    DemoHeader,
    DemoFooter
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active{
  transition: all .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
