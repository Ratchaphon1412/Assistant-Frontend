<template>
  <NavbarFooter> <RegisterCard /> </NavbarFooter>
</template>
<script>
import RegisterCard from "@/components/RegisterCard.vue";
import NavbarFooter from "@/layouts/NavbarFooter.vue";
export default {
  name: "Register",
  components: {
    RegisterCard,
    NavbarFooter,
  },
};
</script>
