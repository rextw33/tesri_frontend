<template>
  <div class="bg-gray-50" id="contacts_href">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16
        lg:px-8
        lg:flex
        lg:items-center
        lg:justify-between
      "
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">連絡我們</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
            "
          >
            <router-link to="/contacts">更多資訊</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>
