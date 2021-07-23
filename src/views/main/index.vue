<template>
  <Introduction />
  <News />
  <Announcement />
  <Resources />
  <Links />
  <Policies />
  <Contacts />
</template>

<script>
import Introduction from "@/views/main/Introduction.vue";
import News from "@/views/main/News.vue";
import Announcement from "@/views/main/Announcement.vue";
import Resources from "@/views/main/Resources.vue";
import Links from "@/views/main/Links.vue";
import Policies from "@/views/main/Policies.vue";
import Contacts from "@/views/main/Contacts.vue";

export default {
  name: "Main",
  components: {
    Introduction,
    News,
    Announcement,
    Resources,
    Links,
    Policies,
    Contacts,
  },
};
</script>

<style></style>
