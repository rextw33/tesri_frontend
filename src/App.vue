<template>
  <div id="nav" class="flex justify-between">
    <div>
      <router-link to="/">特有生物研究保育中心植物標本館 (TAIE)</router-link>
    </div>
    <div class="flex">
      <div class="px-5">
        <a
          href="https://test-tesri.microtekweb.com/"
          target="_blank"
          alt="前台管理"
        >
          <BriefcaseIcon class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="px-5">
        <router-link to="/profile">
          <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
        </router-link>
      </div>
    </div>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import { UserCircleIcon, BriefcaseIcon } from "@heroicons/vue/outline";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    UserCircleIcon,
    BriefcaseIcon,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
