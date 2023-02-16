<template>
  <main>
    <Navbar />
    <div class="container">
      <slot />
    </div>
    <Footer />
  </main>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "NavbarFooter",
  components: {
    Navbar,
    Footer,
  },
};
</script>
