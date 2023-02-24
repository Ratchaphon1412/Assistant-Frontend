<template>
  <main>
    <Slidebar />
    <div class="mx-auto w-full max-h-screen">
      <slot />
    </div>
  </main>
</template>

<script>
import Slidebar from "@/components/Slidebar.vue";
export default {
  name: "SlidebarLayout",
  components: {
    Slidebar,
  },
};
</script>
