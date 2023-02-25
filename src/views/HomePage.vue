<template>
  <NavbarFooter>
    <div>
      <WorldModel />
    </div>
  </NavbarFooter>
</template>

<script>
import NavbarFooter from "@/layouts/NavbarFooter.vue";
import WorldModel from "@/components/models/world.vue";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    NavbarFooter,
    WorldModel,
  },
  setup() {},
};
</script>
