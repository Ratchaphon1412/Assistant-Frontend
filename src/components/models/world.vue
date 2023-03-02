<script>
import { defineComponent } from "vue";
import * as THREE from "three";
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
    const objectModels = null;
    const onReady = (models) => {
      // console.log(models.animations[0]);
      // console.log(models.scene);
      // objectModels = models;
      // const mixer = new THREE.AnimationMixer(models.scene);
      // mixer.clipAction(models.animations[0]).play();
      // // models.animations.forEach(function (clip) {
      // //   mixer.clipAction(clip).play();
      // // });
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
      objectModels,
    };
  },
});
</script>

<template>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }"
    class="w-full h-full overflow-y-hidden"
    resize="false"
  >
    <Camera :position="{ x: 2, y: 5, z: 4 }" />
    <Scene :alpha="true" background="black">
      <AmbientLight />
      <PointLight
        color="white"
        :intensity="10"
        :position="{ x: 100, y: 1000, z: 5000 }"
      />
      <GltfModel
        src="/assets/models/ironman.gltf"
        :size="5"
        @load="onReady"
        @progress="onProgress"
        @error="onError"
        :position="{ x: 0, y: 0, z: 0 }"
      />
    </Scene>
  </Renderer>
</template>
