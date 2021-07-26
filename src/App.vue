<template>
  <nav class="bg-gray-300 h-16 fixed top-0 inset-x-0">
    <div class="max-w-6xl mx-auto py-5">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <router-link to="/">特有生物研究保育中心植物標本館 (TAIE)</router-link>
        </div>
        <div class="hidden md:flex items-center space-x-1">
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
    </div>
  </nav>
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
</style>
