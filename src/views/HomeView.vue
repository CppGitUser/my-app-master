<template>
  <div class="home">
    <!-- <mainB /> -->
    <!--<tiktak />-->
    <spaceinvaders/>
  </div>
</template>

<script>
// import mainB from '@/components/Home/mainBlock'
// import tiktak from "@/components/Home/tiktaktoe.vue";
import spaceinvaders from "@/components/Home/SpaceInvaders.vue";
export default {
  name: "HomeView",
  components: {
    // mainB,
    // tiktak,
    spaceinvaders
  },
};
</script>
