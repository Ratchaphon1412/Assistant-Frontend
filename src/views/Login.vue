<template>
  <NavbarFooter>
    <LoginCard />
  </NavbarFooter>
</template>
<script>
import NavbarFooter from "@/layouts/NavbarFooter.vue";
import LoginCard from "@/components/LoginCard.vue";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    NavbarFooter,
    LoginCard,
  },
};
</script>
