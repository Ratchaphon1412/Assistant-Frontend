<script>
import { defineComponent } from "vue";
import {
  Renderer,
  Camera,
  Scene,
  GltfModel,
  AmbientLight,
  PointLight,
} from "troisjs";

export default defineComponent({
  name: "WorldModel",
  components: {
    Renderer,
    Camera,
    Scene,
    GltfModel,
  },
  setup() {
    const onReady = () => {
      console.log("Model is ready");
    };
    const onProgress = (progress) => {
      console.log("Model is loading", progress);
    };
    const onError = (error) => {
      console.log("Model failed to load", error);
    };
    return {
      onReady,
      onProgress,
      onError,
    };
  },
});
</script>

<template>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }"
    class="w-full h-full overflow-y-hidden"
    resize="false"
  >
    <Camera :position="{ x: 0, y: 0, z: 3 }" />
    <Scene :alpha="true" background="#0f172a">
      <AmbientLight />
      <PointLight
        color="white"
        :intensity="4"
        :position="{ x: 100, y: 1000, z: 40 }"
      />
      <GltfModel
        src="/assets/models/world.gltf"
        :size="5"
        @load="onReady"
        @progress="onProgress"
        @error="onError"
      />
    </Scene>
  </Renderer>
</template>
