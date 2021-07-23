<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white
              hover:bg-gray-700
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch
            sm:justify-start
          "
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-lg font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "標本館介紹", href: "#introduction_href", current: true },
  { name: "最新消息", href: "#news_href", current: false },
  { name: "線上資源", href: "#resources_href", current: false },
  { name: "其他連結", href: "#links_href", current: false },
  { name: "使用條款及隱私權政策", href: "#policies_href", current: false },
  { name: "連絡我們", href: "#contacts_href", current: false },
];

export default {
  name: "Indexer",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      open,
    };
  },
};
</script>
