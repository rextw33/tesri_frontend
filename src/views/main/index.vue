<template>
  <nav class="bg-gray-100 h-16 fixed top-16 inset-x-0 border-b-2">
    <div class="max-w-6xl py-5">
      <div class="hidden sm:block sm:ml-6">
        <div class="flex space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[ item.current ? 'font-bold' : 'text-gray-500 hover:text-green-500']"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-menu hidden md:hidden">
      <div class="block py-2 px-4 text-sm hover:bg-gray-200">Features</div>
      <div class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</div>
    </div>
  </nav>
  <div class="py-32 top-32 inset-x-0">
    <Introduction />
    <News />
    <Announcement />
    <Resources />
    <Links />
    <Policies />
    <Contacts />
  </div>
</template>

<script>
import { ref } from "vue";

import Introduction from "@/views/main/Introduction.vue";
import News from "@/views/main/News.vue";
import Announcement from "@/views/main/Announcement.vue";
import Resources from "@/views/main/Resources.vue";
import Links from "@/views/main/Links.vue";
import Policies from "@/views/main/Policies.vue";
import Contacts from "@/views/main/Contacts.vue";

const navigation = [
  { name: "標本館介紹", href: "#introduction_href", current: true },
  { name: "最新消息", href: "#news_href", current: false },
  { name: "線上資源", href: "#resources_href", current: false },
  { name: "其他連結", href: "#links_href", current: false },
  { name: "使用條款及隱私權政策", href: "#policies_href", current: false },
  { name: "連絡我們", href: "#contacts_href", current: false }
];

export default {
  name: "Home",
  components: {
    Introduction,
    News,
    Announcement,
    Resources,
    Links,
    Policies,
    Contacts
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      open
    };
  }
};
</script>

<style></style>
