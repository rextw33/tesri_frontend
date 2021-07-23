<template>
  <div class="bg-gray-700" id="policies_href">
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
        class="text-3xl font-extrabold tracking-tight text-gray-300 sm:text-4xl"
      >
        <span class="block">使用條款及隱私權政策</span>
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
            <router-link to="/policies">詳細資訊</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Policies",
};
</script>
